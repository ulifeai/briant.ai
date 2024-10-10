import { ObjectId } from "mongodb";
import { Controller } from "./controller";

export class TripController  extends Controller{
    

    tripCollection: any;
    journeyCollection: any;
    passengerCollection: any;

    async init(){
        await super.init()
        this.tripCollection = this.mongoClient?.collection("trips");
        this.journeyCollection = this.mongoClient?.collection("journeys");
        this.passengerCollection = this.mongoClient?.collection("passengers");

    }

    constructor() {
        super();
    }

    async _findTripsinternal(origin_id: ObjectId, destination_id: ObjectId, date: string, checkLocations=true){

        let filters: any = {
            "departure_times": { $in: [date] }
        }

        if(checkLocations){
            filters = {
                $and: [
                    { "stops": { $elemMatch: { "location_id": origin_id } } },
                    { "stops": { $elemMatch: { "location_id": destination_id } } }
                ],
                "departure_times": { $in: [date] }
            }
        }
        try {
            const matchedJourneys = await this.journeyCollection.find(filters).toArray();
            let allTrips: any[] = [];
            for (let journey of matchedJourneys) {
                let tripFilters: any = { "trip_id": journey._id }
                if(checkLocations){
                    tripFilters = { "trip_id": journey._id, origin_id, destination_id }
                }
                const trips = await this.tripCollection.find(tripFilters).toArray();

                for (let i = 0; i < trips.length; i++) {
                    const trip = trips[i];
                    if (trip && trip.departure_hour && trip.arrival_hour) {
                        const departureDateTime = new Date(date + ' ' + (trip.departure_hour||"00:00"));
                        const arrivalDateTime = new Date(date + ' ' + (trip.arrival_hour||"00:00"));
                        allTrips.push({
                            ...trip,
                            departure_time: departureDateTime,
                            arrival_time: arrivalDateTime,
                            passengersCount: parseInt(journey.bus_capacity ?? (process.env.TOTAL_PASSENGERS??"15")) - await this.getTripPassengersCount(trip, date)
                        });
                    }
                }

            }
            return allTrips;
        } catch (error) {
            console.error("Error occurred while finding trips:", error);
        }
    }

    async findTrips(searchData: { origin_id: ObjectId; destination_id: ObjectId; start_date: string; return_date: string; numberOfChildren: number; numberOfAdults: number; numberOfLuggages: number; }) {
        
        return {
            departureData: await this._findTripsinternal(new ObjectId(searchData.origin_id), new ObjectId(searchData.destination_id), searchData.start_date) ?? [],
            returnData: await this._findTripsinternal(new ObjectId(searchData.destination_id), new ObjectId(searchData.origin_id), searchData.return_date) ?? []
        }
    }

    async findTripByDate(searchData: {  start_date: string; }) {
        return await this._findTripsinternal(new ObjectId(), new ObjectId, searchData.start_date, false)
    }

    async loadJourneysByDate(searchData: {  start_date: string; }) {
        return await this.journeyCollection?.find({}).toArray()
    }

    async loadJourneys(){
        return await this.journeyCollection?.find({}).toArray()
    }

    async loadTrips(){
        return await this.tripCollection?.find({}).project({
            _id: 0,
            origin_id: 1,
            destination_id: 1
        }).toArray()
    }

    async getTripPassengersCount(trip: any, departure_time?: string){
        let route = await this.journeyCollection.findOne({ _id:trip.trip_id });
        let startIndex = route.stops.findIndex((elt: any)=> elt.location_id.toString() == trip.origin_id.toString())
        let endIndex = route.stops.findIndex((elt: any)=>elt.location_id.toString() == trip.destination_id.toString());// Index of Stop C

        route.stops = route.stops.map((elt: any)=>elt.location_id)

        // let places = await this.tripCollection.aggregate([
        //     {
        //       $match: {
        //         trip_id: trip.trip_id, // Assuming you have the routeId available
        //         $or: [
        //           { origin_id: { $in: route.stops.slice(0, startIndex + 1) }, destination_id: { $in: route.stops.slice(endIndex) } },
        //           { origin_id: route.stops[startIndex], destination_id: { $in: route.stops.slice(endIndex) } },
        //           { origin_id: { $in: route.stops.slice(0, startIndex) }, destination_id: route.stops[endIndex] }
        //         ]
        //       }
        //     },
        //     {
        //       $lookup: {
        //         from: "passengers",
        //         localField: "_id",
        //         foreignField: "trip_id",
        //         as: "bookingPassengers"
        //       }
        //     },
        //     {
        //       $unwind: "$bookingPassengers"
        //     },
        //     {
        //       $group: {
        //         _id: null,
        //         totalSeatsOccupied: { $sum: { $size: "$bookingPassengers.passengers" } }
        //       }
        //     }
        //   ]).toArray()
        // let places = await this.tripCollection.aggregate([
        //     {
        //       $match: {
        //         trip_id: trip.trip_id, // Assuming you have the trip_id available
        //         $or: [
        //           { origin_id: { $in: route.stops.slice(0, startIndex + 1) }, destination_id: { $in: route.stops.slice(endIndex) } },
        //           { origin_id: route.stops[startIndex], destination_id: { $in: route.stops.slice(endIndex) } },
        //           { origin_id: { $in: route.stops.slice(0, startIndex) }, destination_id: route.stops[endIndex] }
        //         ]
        //       }
        //     },
        //     {
        //       $lookup: {
        //         from: "passengers",
        //         localField: "_id",
        //         foreignField: "trip_id",
        //         as: "bookingPassengers"
        //       }
        //     },
        //     {
        //       $unwind: "$bookingPassengers"
        //     },
        //     {
        //       $group: {
        //         _id: null,
        //         totalSeatsOccupied: { $sum: { $size: "$bookingPassengers.passengers" } }
        //       }
        //     }
        //   ]).toArray();

        console.log(route.stops.slice(0, endIndex) , route.stops.slice(startIndex+1) , route.stops)

        let places = await this.tripCollection.aggregate([
            {
              $match: {
                trip_id: trip.trip_id,
                origin_id: { $in: route.stops.slice(0, endIndex) }, 
                destination_id: { $in: route.stops.slice(startIndex+1) } ,
              }
            },
            {
              $lookup: {
                from: "passengers",
                localField: "_id",
                foreignField: "trip_id",
                as: "bookingPassengers"
              }
            },
            {
              $unwind: "$bookingPassengers"
            },
            {
                $match: {
                  "bookingPassengers.paymentStatus": "SUCCEEDED",
                  "bookingPassengers.departure_time": departure_time,
                }
              },
            {
              $group: {
                _id: null,
                totalSeatsOccupied: { $sum: { $size: "$bookingPassengers.passengers" } }
              }
            }
          ]).toArray();
          
        console.log(places)
          

          if(places.length>0)
            return places[0].totalSeatsOccupied;
          return 0;
                  
    }

    async loadTrip(_id: ObjectId){

        let data = await this.journeyCollection?.find({
            _id: new ObjectId(_id)
        }).toArray()
        if(data && data.length != 0){
            data[0].journey = await this.tripCollection?.find({
                trip_id: new ObjectId(_id)
            }).toArray()
    
            return data
        }else {
            return await this.tripCollection?.find({
                _id: new ObjectId(_id)
            }).toArray()
        }
        
    }

    async loadPassengersByTrip(journey_id: ObjectId, date: string){
        
        let filters: any = {
            "_id": new ObjectId(journey_id)
        }

        try {
            const matchedJourneys = await this.journeyCollection.find(filters).toArray();
            let allTrips: any[] = [];
            if (matchedJourneys.length > 0) {
                let journey = matchedJourneys[0]
                
                let tripFilters: any = { "trip_id": journey._id }
               
                const trips = await this.tripCollection.find(tripFilters).toArray();

                for (let i = 0; i < trips.length; i++) {
                    const trip = trips[i];
                    if (trip && trip.departure_hour && trip.arrival_hour) {
                        allTrips.push({
                            ...trip,
                            passengers: await this.passengerCollection.find({trip_id: trip._id, departure_time: date.toString(), paymentStatus: "SUCCEEDED"}).toArray()
                        });
                    }
                }

            }
            return allTrips;
        } catch (error) {
            console.error("Error occurred while finding trips:", error);
        }

        // return await this.passengerCollection?.find({
        //     trip_id: new ObjectId(trip_id),
        //     departure_time: date
        // }).toArray()
    }

    async createTrip(data: {origin_id: ObjectId, destination_id: ObjectId, departure_times?: [Date], bus_capacity:  number, parent_id?: ObjectId|null}){    

        let result = await this.journeyCollection.insertOne({stops: [{location_id: data.origin_id}, {location_id: data.destination_id}], departure_times: data.departure_times, bus_capacity: data.bus_capacity })
        delete data.departure_times
        await this.tripCollection.insertOne({...data, trip_id: result.insertedId})
        return result;
    }

    async updateTrip(_id: ObjectId, trips: any, stops: any){
        let a = await this.journeyCollection.updateOne({_id: new ObjectId(_id)}, {$set:{stops: stops}})

        let idsToDelete: ObjectId[] = trips.map((trip: any)=>new ObjectId(trip._id))
            
        await this.tripCollection.deleteMany({
            trip_id: new ObjectId(_id),
            _id: { $nin: idsToDelete } 
        })
        
        trips.forEach(async (trip: any) => {
           delete trip._id
           await this.tripCollection.updateOne({
                trip_id: new ObjectId(_id),
                origin_id: trip.origin_id,
                destination_id: trip.destination_id,
            }, 
            {$set: trip },
            { 
                upsert: true,
            })         
        });

       
        return a
    }

    async updateSingleTrip(_id: ObjectId, departure_time: [Date], bus_capacity:  number){
        let a = await this.journeyCollection.updateOne({_id: new ObjectId(_id)}, {$set:{departure_times: departure_time, bus_capacity}})
        return a
    }

    async deleteTrip(_id: ObjectId){
        await this.tripCollection.deleteMany({trip_id: new ObjectId(_id)})
        return await this.journeyCollection.deleteOne({_id: new ObjectId(_id)})
    }

    async loadStops(_id: ObjectId){

        return await this.tripCollection?.find({
            parent_id: new ObjectId(_id)
        }).toArray()
    }

    async createStop(trip_id: ObjectId, data: {location_id: ObjectId, price: number}){
        return await this.tripCollection.updateOne(
            { _id: new ObjectId(trip_id)},
            { $push: { journey: {...data, _id: new ObjectId()} } }

        )
    }

    async updateStop(trip_id: ObjectId, stop_id: ObjectId, data: {location_id: ObjectId, price: number}){
        return await this.tripCollection.updateOne(
            {
                _id: new ObjectId(trip_id),
                "journey._id": new ObjectId(stop_id) ,

            }, 
            {
                $set: {"journey.$": {...data, _id: new ObjectId(stop_id)}}
            })
    }

    async deleteStop(_id: ObjectId, trip_id: ObjectId){
        return await this.tripCollection.updateOne(
            {
                _id: new ObjectId(trip_id),
            }, 
            {
                $pull: {journey: {
                    _id: new ObjectId(_id)
                }}
            })
    }
   
}
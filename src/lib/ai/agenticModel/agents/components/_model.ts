import { Model } from "@/lib/ai/model";
import { WebPageConfigSchema } from "@/validators/modelOutput";

const localModel = Model.withStructuredOutput(WebPageConfigSchema)
// let localModel = model.pipe(model);

export default localModel;
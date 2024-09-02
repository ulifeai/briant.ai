import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal } from "react"

export const Modal = (props : {showModal: boolean, closeModal: MouseEventHandler<HTMLButtonElement>, label: string, children: ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal })=>{
   return  (
    <div
    id="default-modal"
    tabIndex={-1}
    aria-hidden="true"
    className={ (props.showModal ? "": "hidden")+ " bg-[#52515163] flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"}
  >
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow ">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900 ">
            {props.label}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            data-modal-hide="default-modal"
            onClick={props.closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {props.children}
      </div>
    </div>
  </div>

   )
}
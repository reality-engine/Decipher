import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function OptionsModal({ isModalOpen, setIsModalOpen }) {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
        </Transition.Child>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform w-1/2 overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <h2 className="text-2xl font-bold mb-6">Options</h2>
                <div className="grid gap-4">
                  <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                    Download Data as CSV
                  </button>
                  <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                    <a
                      href="https://thoughtshare.dreammachine.one/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API Documentation{" "}
                    </a>
                  </button>
                  <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
                    <a
                      href="https://forms.gle/YyxTfnyfuMNTaodi8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact DreamTeam
                    </a>
                  </button>
                </div>{" "}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>{" "}
      </Dialog>
    </Transition.Root>
  );
}

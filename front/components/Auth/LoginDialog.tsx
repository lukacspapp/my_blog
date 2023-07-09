import * as Dialog from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';

export default function LoginDialog({ children }) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.DialogPortal>
          <Dialog.Overlay className="bg-[#fd9090] dark:bg-[#382173] opacity-70 fixed inset-0" />
          <div className="animate-slide-in fixed top-[50%] left-[50%]">
            <Dialog.Content
              className="animate-dialog-slide-in items-center sm:bg-white border-gray-500 dark:border-gray-600 border border-opacity-100 flex flex-col justify-between z-10 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] sm:width-[315px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-[#ffffff] dark:bg-[#0a0a0a] p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            >
              <Dialog.Title>
                <h1 className="text-black text-lg font-semibold dark:text-white flex-row justify-between p-2">
                  Sign In
                </h1>
              </Dialog.Title>
              <Dialog.Description className="text-gray-400 p-2 dark:text-gray-400 w-auto mt-2 block sm:flex justify-between items-center">
                <div className="flex flex-col sm:flex-wrap mb-4">
                  <button
                    aria-label="Continue with google"
                    role="button"
                    className=" py-2.5 px-3 flex mb-2 justify-center rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border border-solid border-gray-500 dark:border-gray-600"
                    onClick={() => signIn('google')}
                  >
                    <svg
                      width={19}
                      height={20}
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <p className="font-medium ml-4 text-black dark:text-white">Continue with Google</p>
                  </button>
                  <button
                    aria-label="Continue with Facebook"
                    role="button"
                    className="py-2.5 px-3 transition-colors justify-center  duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                    onClick={() => signIn('facebook')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={20}
                      viewBox="0 0 1365.333 1365.333"
                    >
                        <path
                          d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                          fill="#fff"
                        />
                    </svg>
                    <p className="font-medium ml-4 text-black dark:text-white">Continue with Facebook</p>
                  </button>
                </div>
              </Dialog.Description>
            </Dialog.Content>
          </div>
        </Dialog.DialogPortal>
      </Dialog.Root>
    </>
  );
}

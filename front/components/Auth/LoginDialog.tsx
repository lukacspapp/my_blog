import * as Dialog from '@radix-ui/react-dialog';

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
                    className=" items-center py-2.5 px-3 flex mb-2 justify-center rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border border-solid border-gray-500 dark:border-gray-600"
                  >
                    <svg
                      width={19}
                      height={20}
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4s"
                    >
                      <path
                        d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                        fill="#4285F4"
                        fillRule='evenodd'
                        clipRule={'evenodd'}
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
                  </button>
                  <button
                    aria-label="Continue with Facebook"
                    role="button"
                    className="py-2.5 px-5 mb-2 transition-colors justify-center  duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width={19} height={20}
                    className="h-5 w-5"
                  >

                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
                      fill="#1877f2"
                    />
                    </svg>
                  </button>
                  <button
                    aria-label="Continue with GitHub"
                    role="button"
                    className="py-2.5 px-3 transition-colors justify-center duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 border rounded-md border-solid border-gray-500 dark:border-gray-600 flex items-center"
                  >
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                      />
                    </svg>
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

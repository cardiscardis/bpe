

export default function Layout({ children }) {

  return (
    <>
        <main className={`w-full bg-white bg-cover h-screen flex flex-col overflow-hidden`}>
            {children}
        </main>
    </>
  )
}
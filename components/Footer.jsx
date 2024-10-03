import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">&copy; {new Date().getFullYear()} Seujenhi. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
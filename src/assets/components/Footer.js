import React from 'react'
import GitHubButton from 'react-github-btn'

function Footer({github}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with <span role="img" aria-label="react">⚛️</span> by <a className="text-blue-500 hover:underline" href="https://github.com/clivetc">Tendai Clive</a>
      </p>
    </div>
  )
}

export default Footer
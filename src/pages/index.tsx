import React from "react"
import Container from "../components/container"
import Link from "../components/link"
import Theme from "../components/theme"

const IndexPage = () => {
  return (
    <Theme>
      <Container>
        <div className="mt-20">
          <h1 className="text-6xl font-heading -ml-1">Bruno Roemers</h1>
        </div>

        <div className="mt-20">
          <span>Code artisan and web3 citizen</span>
          <ul>
            <li>
              <Link to="https://linkedin.com/in/bruno-roemers">https://linkedin.com/in/bruno-roemers</Link>
            </li>
            {/* <li>
              <Link to="https://twitter.com/brunoroemers">https://twitter.com/brunoroemers</Link>
            </li> */}
            <li>
              <Link to="https://github.com/brunoroemers/">https://github.com/brunoroemers/</Link> (personal)
            </li>
            <li>
              <Link to="https://github.com/bruno-atmire/">https://github.com/bruno-atmire/</Link> (job-related)
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <ul className="block md:columns-2 gap-4 -mt-4">
            {[
              <>
                <h1 className="text-2xl mb-2">Post 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </>,
              <>
                <h1 className="text-2xl mb-2">Post 2</h1>
                <p>
                  Hello world
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque doloremque voluptatum architecto delectus beatae! Aperiam officiis voluptate obcaecati cupiditate consequatur earum rerum repellat aut aliquid harum! Natus, quaerat animi!
                </p>
              </>,
              <>
                <h1 className="text-2xl mb-2">Post 3</h1>
                <p>Think different and you will go far.</p>
              </>,
              <>
                <h1 className="text-2xl mb-2">Post 3</h1>
                <p>Think different and you will go far.</p>
              </>,
            ].map(post => (
              // TODO create tiles from blog folder
              // TODO make each tile clickable
              <li className="block break-inside-avoid pt-4">
                <section className="p-4 border-b-2 border-blue-600">
                  {post}
                </section>
              </li>
            ))}
          </ul>
        </div>
        
      </Container>
    </Theme>
  )
}

export default IndexPage

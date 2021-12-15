import * as React from "react"
import { Container } from "../components/container"
import Link from "../components/link"
import Theme from "../components/theme"

const NotFoundPage = () => {
  return (
    <Theme>
      <Container>
        <div className="mt-20">
          <h1 className="text-6xl font-heading -ml-1">Page not found</h1>
        </div>

        <div className="mt-20">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Container>
    </Theme>
  )
}

export default NotFoundPage

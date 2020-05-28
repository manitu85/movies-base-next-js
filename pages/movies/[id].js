import { useRouter } from 'next/router'
import { Container, Jumbotron, Button } from 'reactstrap'

import { getMovieById } from '../../actions'


const Movie = props => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props
  // console.table('MOB', movie);
  

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return(
    <Container>
      <Jumbotron>
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <p className='text-desc'>{ movie.longDesc } </p>
      <style jsx>
        {`
          .text-desc {
            font-size: 18px;
          }
        `}
      </style>
    </Container>
  )
}

Movie.getInitialProps = async ({query}) => {
  const movie = await getMovieById(query.id)

  return {movie}
}

export default Movie


// Newer way Next js v9.4
// export async function getStaticPaths() {
//   // const movie = await getMovieById(id)  // fetch movies
//   return {
//     paths: [
//       { params: { id: `...` } }
//       // { params: { id: '2' } },
//       // { params: { id: '3' } }
//     ],
//     fallback: true // See the "fallback" section below
//   };
// }

// export async function getStaticProps(params) {
//   const { id } = params
//   const movie = await getMovieById(id)  // fetch movies
//   return {
//     props: { movie }, // will be passed to the pageProps
//   }
// }





 
 
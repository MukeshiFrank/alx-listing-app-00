import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb Clone Listing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Listing App</h1>
        
        <div className="mb-6">
          <Card 
            title="Sample Property"
            description="A nice place to stay!"
            imageUrl="/assets/sample-property.jpg"
          />
        </div>

        <Button text="Book Now" onClick={() => alert("Booking...")} />
      </main>
    </div>
  )
}

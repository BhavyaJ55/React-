import ProductCard from "./ProductGallery"
function App() {
  return (
    <div style={{display:"flex", gap:"60px"}}>
      <ProductCard 
      name="Short kurti"
      price={399}
      image="https://cdn.shopify.com/s/files/1/0655/6912/8698/products/ABC_8406_2_34ce61f0-912d-4f32-a8c6-2bb36101e04b_600x.jpg?v=1679399755"
      />
      <ProductCard 
      name="Watch"
      price={1499}
      image="https://th.bing.com/th/id/OIP.mAJ7J9QJXSx1a4VPJx3JGQHaHa?w=161&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
      />
      <ProductCard 
      name="Bag"
      price={599}
      image="https://th.bing.com/th/id/OIP.saF0wlwTyo0ATA9-Q1UgHQHaHa?w=210&h=210&c=7&r=0&o=7&pid=1.7&rm=3"
      />
      < ProductCard
      name="Earrings"
      price={99}
      image="https://th.bing.com/th/id/OIP.3TlShvvgnTsqB6t1l5ihtwHaHa?w=214&h=214&c=7&r=0&o=7&pid=1.7&rm=3"
      />
    </div>
  )
}

export default App

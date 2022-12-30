export const CardProducto = ( {producto} ) => {
  return (
    <div class="card m-1">
        <img src={producto.imagen} class="card-img-top" alt={producto.title}/>
        <div class="card-body">
        <h5 class="card-title">{producto.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <small class="text-muted">{producto.precio}</small>
        </div>
    </div>
  )
}

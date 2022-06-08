<script>
export default {
  data() {
    return {
      product: {
        name: "Camara",
        price: "450000",
        stock: "2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat fugit fuga sapiente alias eveniet pariatur iure libero facilis veniam.",
        images:[{
          image:"/src/assets/images/camara-2.jpg",
          thumbnail:"/src/assets/images/camara-thumb.jpg"
        },
        {
          image:"/src/assets/images/camara-2.jpg",
          thumbnail:"/src/assets/images/camara-2-thumb.jpg"
        }
        ]
      },
      activeImage: 0,
    }
  },
  methods: {
  
  },
  mounted() {
  }
}
</script>

<template>
<div class="car">
  <header>
    <h3>Commerce</h3>
    <button class="cart">Carro (0)</button>
    <div class="cart-content">
      <div class="cart-content__product">
        <img v-bind:src="product.images[0].image" :alt="product.name.toUpperCase()" />
        <span>{{product.name}} - ${{new Intl.NumberFormat("es-CO").format(product.price)}}</span>
      </div>
      <div class="cart-content__product">
        <img v-bind:src="product.images[1].image" :alt="product.name" />
        <span>{{product.name}} - ${{new Intl.NumberFormat("es-CO").format(product.price)}}</span>
      </div>
    </div>
  </header>

  <main>
    <section class="product">
      <div class="product__thumbnails">
        <div class="thumb" :active="{active: activeImage === 0}"
         :style="{backgroundImage: 'url('+ product.images[0].thumbnail+')'}">
        </div>
        
        <div class="thumb" :active="{active: activeImage === 1}"
         :style="{backgroundImage: 'url('+ product.images[0].thumbnail+')'}">
        </div>
      </div>
      <div class="product__image">
        <img class="article" :src="product.images[0].image" alt="" />
      </div>
    </section>
    
    <section class="description">
      <h4>{{product.name.toUpperCase()}} {{product.stock === 0 ? "😭" : "😎"}}</h4>
      <span class="badge new">Nuevo</span>
      <span class="badge offer">Oferta</span>
      <p class="description__status"></p>
      <p class="description__price">${{new Intl.NumberFormat("es-CO").format(product.price)}}</p>
      <p class="description__content">
      {{product.content}}
      </p>

      <div class="discount">
        <span>Codigo de Descuento:</span>
        <input type="text" placeholder="Ingresa tu codigo" />
      </div>

      <button>Agregar al carrito</button>
    </section>
  </main>
</div>
</template>


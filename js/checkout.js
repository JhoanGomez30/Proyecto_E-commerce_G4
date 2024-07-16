// document.getElementById('finalizar-compra').addEventListener('click', function() {
//     const mp = new MercadoPago('TEST-b42ee590-a869-428b-a9c9-416b974b54f6', {
//         locale: 'es-CO'
//     });
const mercadopago = new MercadoPago('TEST-b42ee590-a869-428b-a9c9-416b974b54f6', {
           locale: 'es-CO'               
    });

function finalizarCompra(){
    const bricksBuilder = mercadopago.bricks();
    const orderData = [
        {
         quantity: 1,
         description: "SLEEVE T-SHIRT",
         price:  120000
        },
        {
            quantity: 1,
            description: "MESH TANK",
            price:  65000
        },
        {
            quantity: 1,
            description: "CREST OVERSIZED HOODIE",
            price:  155000
        },
    ];

    fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (preference) {
          createCheckoutButton(preference.id);
    
          $(".shopping-cart").fadeOut(500);
          setTimeout(() => {
           // $(".container_payment").show(500).fadeIn();
          }, 500);
        })
        .catch(function () {
          //alert("Unexpected error");
          //$('#checkout-btn').attr("disabled", false);          
          document.getElementById("checkout-btn").style.display = "none";
        });  

};

function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();
  
    const renderComponent = async (bricksBuilder) => {
      if (window.checkoutButton) window.checkoutButton.unmount();
      await bricksBuilder.create(
        'wallet',
        'button-checkout', // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId
          },
          callbacks: {
            onError: (error) => console.error(error),
            onReady: () => {}
          }
        }
      );
    };
    window.checkoutButton =  renderComponent(bricksBuilder);
  }


    const preference = {
        items: [
            {
                title: 'Total Carrito',
                unit_price: 340000,
                quantity: 1
            }
        ]
    };

    mp.checkout({
        preference: {
            id: 'YOUR_PREFERENCE_ID'
        }
    });
// });

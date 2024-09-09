<script>
    let timeNow = new Date();
    $: hour = timeNow.getHours();
    $: minutes = timeNow.getMinutes();
    $: moment =
    hour < 6 ?  "Buenas noches 🌙" :
    hour < 12 ? "Buenos días 🌞" :
    hour < 18 ? "Buenas tardes 🌅" : 
    "Buenas noches 🌙";
    // ejample 

    setInterval(() => {
        timeNow = new Date();
    }, 1000);

</script>

<div class="card">
    <p>{hour < 10 ? '0' + hour: hour}:{minutes < 10 ? '0' + minutes : minutes}</p>
    <small>{moment}</small>
</div>

<style lang="scss">
    @import "../styles/global.sass";

    .card {
        border-radius: 20px;
        font-family: Fira Code;
        background-color: $dark-blue;
        display: grid;
        place-content: center;
        color: $white;
        transition: 0.2s ease-in-out;
        background-color: rgb(12, 39, 149);
        color: white;
        text-align: center;
        font-weight: bold;
        line-height: 50px;

        &:hover {
            transform: scale(1.02);
        }
        
        p {
        font-size: 4em;

        }

        small {
            font-size: 1.4em;
        }
        
    }

    @media (width < 1200px) {
        .card {
            p {
                font-size: 3em;
            }

            small {
                font-size: 1.2em;
            }
        }
    }

    @media (width < 900px) {
        .card {
            display: none;
        }
    }
    
</style>
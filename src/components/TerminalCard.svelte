<script>
    import {showPortfolio} from "../store/globalStore.js"

    const handleShowPortfolio = () => {
        showPortfolio.update(value => !value);
    }

</script>


<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
<div on:click={handleShowPortfolio} >
    <i class="bi bi-terminal-fill"></i>
    <p>Terminal</p>
</div> 




<style lang="scss">
    @import "../styles/global.sass";

    div {
        background-color: gray;
        display: grid;
        place-content: center;
        color: $white;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        text-align: center;
        
        p {
            font-family: Fira Code;
            font-size: 2em;
            font-weight: bold;
        }


        &:hover {
            transform: scale(1.02);

        }

        i {
            font-size: 80px;
            transition: 0.2s ease-in-out;

            &:hover {
                filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5));
            }   
        } 

    }

    @media (max-width: 1200px) {
        div {
            p {
                font-size: 1.5em;
            }
        }
    }

    @media (max-width: 900px) {
        div {
            display: none;
        }
    }
</style>
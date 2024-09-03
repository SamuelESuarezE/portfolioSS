<script>
    import {showPortfolio} from "../store/globalStore.js"

    const handleShowPortfolio = () => {
        console.log("Show Portfolio")
        showPortfolio.update(value => !value);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
<div on:click={handleShowPortfolio} >
    <i class="bi bi-terminal-fill"></i>
</div> 

<style lang="scss">
    @import "../styles/global.sass";

    div {
        font-size: 80px;
        background-color: gray;
        display: grid;
        place-content: center;
        color: $white;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.2s ease-in-out;


        &:hover {
            transform: scale(1.03);
            border: 1px solid $white;
            box-shadow: 0px 0px 15px #ffffff9d;

        }

        i {
            filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.418));
            transition: 0.2s ease-in-out;

            &:hover {
                filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5));
            }   
        } 

    }
</style>
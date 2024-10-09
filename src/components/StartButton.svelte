<script>
    import { afterUpdate } from "svelte";
    import { blur } from "svelte/transition";
    import {showPortfolio} from "../store/globalStore.js"

</script>

{#if !$showPortfolio}
<div id="button-container" transition:blur>
    
    <button on:click={() => showPortfolio.set(true)}>
          <p>Click Aqui!</p>
      </button>
</div>
{/if}



<style lang="scss" scoped>
    @import "../styles/global.sass";

    #button-container {
        position: fixed;
        height: 100%;
        width: 100%;
    	background-color: $black;
		display: flex;
		justify-content: center;
		align-items: center;
        z-index: 5;
    }

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    width: 250px;
    height: 60px;
    transition: all .35s;
    background: transparent;
    border: 3px solid white;
}

button:hover {
    border: none;
    transform: scale(1.05);
    background: $blue;


    p {
        transform: scale(1.1);
    }

}

p{
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all .35s;
  font-size: 1.2rem;
  font-family: Montserrat;
}

</style>

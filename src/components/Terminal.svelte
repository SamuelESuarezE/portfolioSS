<script>
    import { createEventDispatcher, afterUpdate } from "svelte";
    import { blur, scale } from "svelte/transition";

    const commands = ["help", "start", "clear"];
    let cliLines = [];
    let inputValue = "";
    let showPortfolio = false;

    const dispatch = createEventDispatcher();

    function addLine(event) {
        
        if (event.key === "Enter") {
            if (inputValue === "") return;

            // ! Invalid command
            if (!commands.includes(inputValue)) {
                cliLines = [...cliLines, "Invalid command."]
                inputValue = ""
                return
            }

            // Start
            if (inputValue === "start") {
                cliLines = [...cliLines, "Portfolio starting..."]
                inputValue = "";
                setTimeout(() => {
                    showPortfolio = true
                }, 1500)

                return
            }

            // Help
            if (inputValue === "help") {
                cliLines = [...cliLines, `Available commands: ${commands.join(", ")}.`]
                inputValue = "";
                return
            }

            // Clear
            if (inputValue === "clear") {
                cliLines = [];
                inputValue = "";
                return
            }


            cliLines = [...cliLines, inputValue];
            inputValue = "";
        }
    }

    let cliContainer;
    afterUpdate(() => {
  if (cliContainer) {
    cliContainer.scrollTop = cliContainer.scrollHeight;
  }
});
</script>

{#if showPortfolio}
<div id="terminal" transition:blur>
    <section transition:scale>
        <header>
            <div class="buttons">
                <button class="red"></button>
                <button class="yellow"></button>
                <button class="green"></button>
            </div>
            <h1>Samuel Suarez - Portfolio</h1>
        </header>
        <div bind:this={cliContainer} class="cli">
            <p>
                Welcome to Samuel Suarez's portfolio. Type 'help' for available
                commands.
            </p>
            <ul>
                {#each cliLines as line}
                    <li>
                        user@portfolio-ss ~ $ <span class="pastline">{line}</span>
                    </li>
                {/each}
                <li>
                    user@portfolio-ss ~ $
                    <input
                        bind:value={inputValue}
                        on:keydown={addLine}
                        type="text"
                    />
                </li>
            </ul>
        </div>
    </section>
</div>
{/if}



<style lang="scss" scoped>
    @import "../styles/global.sass";

    #terminal {
        height: 100dvh;
        width: 100%;
    	background-color: $black;
		display: flex;
		justify-content: center;
		align-items: center;
        position: absolute;
        z-index: 2;
    }

    section {
        height: 500px;
        aspect-ratio: 5/3;
        background-color: #1e1e1e;
        border-radius: $b-rad;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.521);
        animation: openTerminal 1s forwards;
    }

    @keyframes openTerminal {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0%);
        }
    }

    .cli {
        width: 100%;
        max-height: calc(100% - 32px);
        padding-inline: 10px;
        padding-block: 10px;
        overflow-y: auto;

        p {
            color: $white;
            font-family: Fira Code;
            font-weight: 500;
        }

        ul {
            list-style: none;

            li {
                display: flex;
                color: $white;
                font-family: Fira Code;
                font-weight: 500;
                color: $blue;

                input {
                    background-color: transparent;
                    border: none;
                    margin-left: 10px;
                    font-size: 16px;
                    color: $white;
                    font-family: Fira Code;
                    width: 50%;
                }

                input:focus {
                    outline: none;
                }

                .pastline {
                    color: #9c9c9c;
                    margin-left: 10px;
                }
            }
        }
    }

    .cli::-webkit-scrollbar {
        width: 10px;
    }
    .cli::-webkit-scrollbar-track {
        background: transparent;
    }
    .cli::-webkit-scrollbar-thumb {
        background: #4b5263;
        border-radius: 5px;
    }
    .cli::-webkit-scrollbar-thumb:hover {
        background: #5c6370;
    }

    header {
        width: 100%;
        height: 32px;
        border-radius: $b-rad $b-rad 0 0;
        background-color: #383838;
        display: flex;
        align-items: center;
        padding-inline: 10px;

        h1 {
            color: $white;
            font-size: 15px;
            font-family: Fira Code;
            margin: auto;
            font-weight: 500;
        }
    }

    .buttons {
        display: flex;
        gap: 10px;
        position: absolute;

        .red,
        .green,
        .yellow {
            width: 15px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            border: none;
            cursor: pointer;
        }

        .red {
            background-color: #f86157;
        }
        .yellow {
            background-color: #fabe29;
        }
        .green {
            background-color: #2dc745;
        }
    }

    @media (max-width: 900px) {
    #terminal {
        display: none;
    }
}
</style>

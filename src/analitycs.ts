import * as $ from "jquery";

function createAnalitics(): object {
    let counter = 0;
    let isDestroyed: boolean = false;
    const listener = (): number => counter++;
    $(document).on("click", listener);
    console.log(counter);

    return {
        destroy() {
            $(document).off("click", listener);
            isDestroyed = true;
        },
        getClicks() {
            if (isDestroyed) {
                return "Analitics is deleted and this is awesome.";
            }
            return counter;
        },
    };
}

window["analitics"] = createAnalitics();

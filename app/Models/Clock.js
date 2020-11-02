export default class Clock {

    constructor() {
    }

    get ClockTemplate() {
        return /*html*/`
        <div class="clock todoItem rounded">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-2 hour1">
                                    <div id="h-1-8" class="circle inactive"></div>
                                    <div id="h-1-4" class="circle inactive"></div>
                                    <div id="h-1-2" class="circle active off h-1-2"></div>
                                    <div id="h-1-1" class="circle active off h-1-1"></div>
                                </div>
                                <div class="col-2 hour2">
                                    <div id="h-2-8" class="circle active off h-2-8"></div>
                                    <div id="h-2-4" class="circle active off h-2-4"></div>
                                    <div id="h-2-2" class="circle active off h-2-2"></div>
                                    <div id="h-2-1" class="circle active off h-2-1"></div>
                                </div>
                                <div class="col-2 minute1">
                                    <div id="m-1-8" class="circle inactive"></div>
                                    <div id="m-1-4" class="circle active off m-1-4"></div>
                                    <div id="m-1-2" class="circle active off m-1-2"></div>
                                    <div id="m-1-1" class="circle active off m-1-1"></div>
                                </div>
                                <div class="col-2 minute2">
                                    <div id="m-2-8" class="circle active off m-2-8"></div>
                                    <div id="m-2-4" class="circle active off m-2-4"></div>
                                    <div id="m-2-2" class="circle active off m-2-2"></div>
                                    <div id="m-2-1" class="circle active off m-2-1"></div>
                                </div>
                                <div class="col-2 second1">
                                    <div id="s-1-8" class="circle inactive"></div>
                                    <div id="s-1-4" class="circle active off s-1-4"></div>
                                    <div id="s-1-2" class="circle active off s-1-2"></div>
                                    <div id="s-1-1" class="circle active off s-1-1"></div>
                                </div>
                                <div class="col-2 second2">
                                    <div id="s-2-8" class="circle active off s-2-8"></div>
                                    <div id="s-2-4" class="circle active off s-2-4"></div>
                                    <div id="s-2-2" class="circle active off s-2-2"></div>
                                    <div id="s-2-1" class="circle active off s-2-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
}
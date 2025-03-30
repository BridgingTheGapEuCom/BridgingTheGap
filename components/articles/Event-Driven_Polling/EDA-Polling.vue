<template>
  <div
    tabindex="0"
    aria-label="Behavioral diagram showing four vertical dashed lines labeled 'System A,' 'Topic,' 'System B,' and 'System C' at the top. A solid rectangle on System A's line sends a 'publish(event.id)' message via a solid arrow to a solid rectangle on the Topic's line. From there, a 'read(event.id)' message goes via a solid arrow to a solid rectangle on System B's line. System B then sends a 'queryChange(event.id)' message via a solid arrow back to the Topic's line, which responds with a 'response(event.details)' message via a dashed arrow back to System B. Below this, the Topic also sends a 'read(event)' message via a solid arrow to a solid rectangle on System C's line. System C then sends a 'queryChange(event.id)' message via a solid arrow back to the Topic's line, which responds with a 'response(event.details)' message via a dashed arrow back to System C. A note at the bottom states '* arrows show the direction of the data flow'."
    role="img"
    class="syncSvgParent w-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="color-scheme: light dark"
      width="462px"
      height="351px"
      viewBox="-0.5 -0.5 462 351"
    >
      <g>
        <g>
          <g>
            <g>
              <g class="sequenceDiagram_actor">
                <g>
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="40"
                    rx="6"
                    ry="6"
                    pointer-events="all"
                    class="sequenceDiagram_actor"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="sequenceDiagram_actor"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="sequenceDiagram_actor"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 98px;
                            height: 1px;
                            padding-top: 20px;
                            margin-left: 1px;
                          "
                          class="sequenceDiagram_actor"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="sequenceDiagram_actor"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="sequenceDiagram_actor"
                            >
                              System A
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="50"
                        y="24"
                        font-size="12px"
                        text-anchor="middle"
                        class="sequenceDiagram_actor"
                      >
                        System A
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_actor">
                <g>
                  <rect
                    x="120"
                    y="0"
                    width="100"
                    height="40"
                    rx="6"
                    ry="6"
                    pointer-events="all"
                    class="sequenceDiagram_actor"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="sequenceDiagram_actor"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="sequenceDiagram_actor"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 98px;
                            height: 1px;
                            padding-top: 20px;
                            margin-left: 121px;
                          "
                          class="sequenceDiagram_actor"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="sequenceDiagram_actor"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="sequenceDiagram_actor"
                            >
                              Topic
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="170"
                        y="24"
                        font-size="12px"
                        text-anchor="middle"
                        class="sequenceDiagram_actor"
                      >
                        Topic
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_actor">
                <g>
                  <rect
                    x="240"
                    y="0"
                    width="100"
                    height="40"
                    rx="6"
                    ry="6"
                    pointer-events="all"
                    class="sequenceDiagram_actor"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="sequenceDiagram_actor"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="sequenceDiagram_actor"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 98px;
                            height: 1px;
                            padding-top: 20px;
                            margin-left: 241px;
                          "
                          class="sequenceDiagram_actor"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="sequenceDiagram_actor"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="sequenceDiagram_actor"
                            >
                              System B
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="290"
                        y="24"
                        font-size="12px"
                        text-anchor="middle"
                        class="sequenceDiagram_actor"
                      >
                        System B
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_actor">
                <g>
                  <rect
                    x="360"
                    y="0"
                    width="100"
                    height="40"
                    rx="6"
                    ry="6"
                    pointer-events="all"
                    class="sequenceDiagram_actor"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="sequenceDiagram_actor"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="sequenceDiagram_actor"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 98px;
                            height: 1px;
                            padding-top: 20px;
                            margin-left: 361px;
                          "
                          class="sequenceDiagram_actor"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="sequenceDiagram_actor"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="sequenceDiagram_actor"
                            >
                              System C
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="410"
                        y="24"
                        font-size="12px"
                        text-anchor="middle"
                        class="sequenceDiagram_actor"
                      >
                        System C
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 49.58 235 L 49.58 40"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 55 75 L 110 75 L 162.76 75"
                    stroke-miterlimit="10"
                    pointer-events="stroke"
                    class="line"
                  />
                  <path
                    d="M 156.88 78.5 L 163.88 75 L 156.88 71.5"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="45"
                    y="60"
                    width="10"
                    height="20"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 170 310 L 169.79 40"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 289.79 90 L 289.79 40"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 410 310 L 409.79 40"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 175 95 L 260 95 L 282.76 95"
                    stroke-miterlimit="10"
                    pointer-events="stroke"
                    class="line"
                  />
                  <path
                    d="M 276.88 98.5 L 283.88 95 L 276.88 91.5"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 175 205 L 345 205 L 402.76 205"
                    stroke-miterlimit="10"
                    pointer-events="stroke"
                    class="line"
                  />
                  <path
                    d="M 396.88 208.5 L 403.88 205 L 396.88 201.5"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="165"
                    y="70"
                    width="10"
                    height="140"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 290 310 L 290 180"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="fullLine">
                <g>
                  <path
                    d="M 285 135 L 63.12 135"
                    stroke-miterlimit="10"
                    pointer-events="stroke"
                    class="fullLine"
                  />
                  <path
                    d="M 56.12 135 L 63.12 131.5 L 63.12 138.5 Z"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="fullLine"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="285"
                    y="90"
                    width="10"
                    height="90"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="45"
                    y="130"
                    width="10"
                    height="50"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 55 175 L 115 175 L 282.76 175"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                  <path
                    d="M 276.88 178.5 L 283.88 175 L 276.88 171.5"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="fullLine">
                <g>
                  <path
                    d="M 405 240 L 63.12 240"
                    stroke-miterlimit="10"
                    pointer-events="stroke"
                    class="fullLine"
                  />
                  <path
                    d="M 56.12 240 L 63.12 236.5 L 63.12 243.5 Z"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="fullLine"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="405"
                    y="200"
                    width="10"
                    height="80"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path
                    d="M 50 310 L 50 280"
                    fill="none"
                    stroke="#000000"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="sequenceDiagram_action">
                <g>
                  <rect
                    x="45"
                    y="235"
                    width="10"
                    height="45"
                    rx="1.5"
                    ry="1.5"
                    pointer-events="all"
                    class="sequenceDiagram_action"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="line">
                <g>
                  <path
                    d="M 55 275 L 145 275 L 402.76 275"
                    stroke-miterlimit="10"
                    stroke-dasharray="3 3"
                    pointer-events="stroke"
                    class="line"
                  />
                  <path
                    d="M 396.88 278.5 L 403.88 275 L 396.88 271.5"
                    stroke-miterlimit="10"
                    pointer-events="all"
                    class="line"
                  />
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="70"
                    y="55"
                    width="80"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 78px;
                            height: 1px;
                            padding-top: 65px;
                            margin-left: 71px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >publish(event.id)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="110"
                        y="69"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        publish(event...
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="190"
                    y="75"
                    width="80"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 78px;
                            height: 1px;
                            padding-top: 85px;
                            margin-left: 191px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >read(event.id)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="230"
                        y="89"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        read(event.id)
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="108.75"
                    y="115"
                    width="122.5"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 120px;
                            height: 1px;
                            padding-top: 125px;
                            margin-left: 110px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >queryChange(event.id)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="170"
                        y="129"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        queryChange(event.id)
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="108.75"
                    y="155"
                    width="122.5"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 120px;
                            height: 1px;
                            padding-top: 165px;
                            margin-left: 110px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >response(event.details)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="170"
                        y="169"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        response(event.detai...
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="254.38"
                    y="185"
                    width="71.25"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 69px;
                            height: 1px;
                            padding-top: 195px;
                            margin-left: 255px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >read(event)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="290"
                        y="199"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        read(event)
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="168.75"
                    y="220"
                    width="122.5"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 120px;
                            height: 1px;
                            padding-top: 230px;
                            margin-left: 170px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >queryChange(event.id)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="230"
                        y="234"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        queryChange(event.id)
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g class="textWithBackground">
                <g>
                  <rect
                    x="168.75"
                    y="255"
                    width="122.5"
                    height="20"
                    pointer-events="all"
                    class="textWithBackground"
                  />
                </g>
                <g>
                  <g
                    transform="translate(-0.5 -0.5)"
                    class="textWithBackground"
                  >
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                        class="textWithBackground"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 120px;
                            height: 1px;
                            padding-top: 265px;
                            margin-left: 170px;
                          "
                          class="textWithBackground"
                        >
                          <div
                            style="box-sizing: border-box; font-size: 0; text-align: center"
                            class="textWithBackground"
                          >
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: normal;
                                word-wrap: normal;
                              "
                              class="textWithBackground"
                            >
                              <span
                                style="font-size: 11px; text-wrap-mode: nowrap"
                                class="textWithBackground"
                              >response(event.details)</span>
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="230"
                        y="269"
                        font-size="12px"
                        text-anchor="middle"
                        class="textWithBackground"
                      >
                        response(event.detai...
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <rect
                    x="0"
                    y="320"
                    width="250"
                    height="30"
                    fill="none"
                    stroke="none"
                    pointer-events="all"
                  />
                </g>
                <g>
                  <g transform="translate(-0.5 -0.5)">
                    <switch>
                      <foreignObject
                        style="overflow: visible; text-align: left"
                        pointer-events="none"
                        width="100%"
                        height="100%"
                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                      >
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style="
                            display: flex;
                            align-items: unsafe center;
                            justify-content: unsafe center;
                            width: 1px;
                            height: 1px;
                            padding-top: 335px;
                            margin-left: 125px;
                          "
                        >
                          <div style="box-sizing: border-box; font-size: 0; text-align: center">
                            <div
                              style="
                                display: inline-block;
                                font-size: 12px;
                                line-height: 1.2;
                                pointer-events: all;
                                white-space: nowrap;
                              "
                            >
                              *arrows show the direction of the data flow
                            </div>
                          </div>
                        </div>
                      </foreignObject>
                      <text
                        x="125"
                        y="339"
                        fill="light-dark(#000000, #ffffff)"
                        font-size="12px"
                        text-anchor="middle"
                      >
                        *arrows show the direction of the data fl...
                      </text>
                    </switch>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.syncSvgParent {
  transition: var(--diagramColorTransition);
}

.sequenceDiagram_actor {
  stroke: var(--tw-color-black);
  fill: var(--tw-color-gray-200);

  .dark > * & {
    stroke: var(--tw-color-white);
    fill: var(--tw-color-gray-200);
    color: black;
  }
}
.line {
  stroke: var(--tw-color-black);
  fill: none;

  .dark > * & {
    stroke: var(--tw-color-white);
  }
}
.sequenceDiagram_action {
  stroke: var(--tw-color-black);
  fill: var(--tw-color-gray-400);

  .dark > * & {
    stroke: var(--tw-color-gray-100);
    fill: var(--tw-color-gray-400);
  }
}
.fullLine {
  stroke: var(--tw-color-black);
  fill: var(--tw-color-black);

  .dark > * & {
    stroke: var(--tw-color-white);
    fill: var(--tw-color-white);
  }
}
.textWithBackground {
  fill: transparent;
}
.textWithBackground > span {
  background-color: var(--color-background);
}
</style>

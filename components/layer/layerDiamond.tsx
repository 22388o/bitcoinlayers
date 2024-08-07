import React, { useState } from "react";
import { Layer } from "./layerProps";

const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return {
                bg: "bg-low",
                fill: "#48E55F",
            };
        case "Medium":
            return {
                bg: "bg-medium",
                fill: "#FFC21B",
            };
        case "High":
            return {
                bg: "bg-high",
                fill: "#EC0B43",
            };
        case "Critical":
            return {
                bg: "bg-critical",
                fill: "#A50F11",
            };
        default:
            return {
                bg: "bg-secondary",
                fill: "#CCCCCC",
            };
    }
};

const Tooltip: React.FC<{ title: string; style: React.CSSProperties }> = ({
    title,
    style,
}) => (
    <div
        className="absolute z-50 p-2 bg-white border border-gray-400 rounded shadow-lg text-xs"
        style={style}
    >
        {title}
    </div>
);

const LayerDiamond: React.FC<{ layer: Layer }> = ({ layer }) => {
    const svgDimensions = "w-32 h-32"; // Consistent dimensions for all SVGs

    const [tooltip, setTooltip] = useState<{
        title: string;
        style: React.CSSProperties;
    } | null>(null);

    const handleMouseEnter = (
        event: React.MouseEvent<SVGSVGElement>,
        title: string,
    ) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setTooltip({
            title,
            style: {
                top: top - 240,
                left: left - 900,
            },
        });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    return (
        <div className="lg:w-[370px] h-[300px] lg:h-full flex justify-center items-center relative ml-6 lg:ml-0 z-30">
            <div className="left-[243px] top-[195.55px] absolute origin-top-left -rotate-45 text-center text-slate-600 text-xs font-medium leading-none">
                Data Availability
            </div>
            <div className="left-0 top-[136.87px] absolute origin-top-left -rotate-45 text-center text-slate-600 text-xs font-medium leading-none">
                Settlement Assurance
            </div>
            <div className="left-[165.14px] top-0 absolute origin-top-left rotate-45 text-center text-slate-600 text-xs font-medium leading-none">
                Bridge
            </div>
            <div className="left-[75.14px] top-[212px] absolute origin-top-left rotate-45 text-center text-slate-600 text-xs font-medium leading-none">
                Network Operator
            </div>

            {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />}

            <div className={`absolute top-[13px] left-[90px] ${svgDimensions}`}>
                <svg
                    viewBox="0 0 97 97"
                    className="w-full h-full relative flex-col justify-start items-start flex"
                    style={{
                        fill: getRiskColorClass(layer.riskAnalysis[0].tier)
                            .fill,
                    }}
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, layer.riskAnalysis[0].title)
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <g id="risk-square">
                        <g clipPath="url(#clip0_207_52485)">
                            <rect
                                id="Rectangle 33"
                                x="48.2646"
                                y="0.264648"
                                width="68.215"
                                height="68.215"
                                transform="rotate(45 48.2646 0.264648)"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_207_52485">
                            <path d="M44.8672 3.66207C46.7436 1.78572 49.7857 1.78573 51.6621 3.66208L93.1025 45.1025C94.9789 46.9789 94.9789 50.021 93.1025 51.8974L51.6621 93.3378C49.7857 95.2142 46.7436 95.2142 44.8672 93.3378L3.42678 51.8974C1.55043 50.021 1.55044 46.9789 3.42678 45.1025L44.8672 3.66207Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div
                className={`absolute top-[85px] left-[157px] ${svgDimensions}`}
            >
                <svg
                    viewBox="0 0 97 97"
                    className="w-full h-full relative flex-col justify-start items-start flex"
                    style={{
                        fill: getRiskColorClass(layer.riskAnalysis[1].tier)
                            .fill,
                    }}
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, layer.riskAnalysis[1].title)
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <g id="risk-square">
                        <g clipPath="url(#clip0_207_52485)">
                            <rect
                                id="Rectangle 33"
                                x="48.2646"
                                y="0.264648"
                                width="68.215"
                                height="68.215"
                                transform="rotate(45 48.2646 0.264648)"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_207_52485">
                            <path d="M44.8672 3.66207C46.7436 1.78572 49.7857 1.78573 51.6621 3.66208L93.1025 45.1025C94.9789 46.9789 94.9789 50.021 93.1025 51.8974L51.6621 93.3378C49.7857 95.2142 46.7436 95.2142 44.8672 93.3378L3.42678 51.8974C1.55043 50.021 1.55044 46.9789 3.42678 45.1025L44.8672 3.66207Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div
                className={`absolute top-[155px] left-[90px] ${svgDimensions}`}
            >
                <svg
                    viewBox="0 0 97 97"
                    className="w-full h-full relative flex-col justify-start items-start flex"
                    style={{
                        fill: getRiskColorClass(layer.riskAnalysis[2].tier)
                            .fill,
                    }}
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, layer.riskAnalysis[2].title)
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <g id="risk-square">
                        <g clipPath="url(#clip0_207_52485)">
                            <rect
                                id="Rectangle 33"
                                x="48.2646"
                                y="0.264648"
                                width="68.215"
                                height="68.215"
                                transform="rotate(45 48.2646 0.264648)"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_207_52485">
                            <path d="M44.8672 3.66207C46.7436 1.78572 49.7857 1.78573 51.6621 3.66208L93.1025 45.1025C94.9789 46.9789 94.9789 50.021 93.1025 51.8974L51.6621 93.3378C49.7857 95.2142 46.7436 95.2142 44.8672 93.3378L3.42678 51.8974C1.55043 50.021 1.55044 46.9789 3.42678 45.1025L44.8672 3.66207Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className={`absolute top-[85px] left-[23px] ${svgDimensions}`}>
                <svg
                    viewBox="0 0 97 97"
                    className="w-full h-full relative flex-col justify-start items-start flex"
                    style={{
                        fill: getRiskColorClass(layer.riskAnalysis[3].tier)
                            .fill,
                    }}
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, layer.riskAnalysis[3].title)
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <g id="risk-square">
                        <g clipPath="url(#clip0_207_52485)">
                            <rect
                                id="Rectangle 33"
                                x="48.2646"
                                y="0.264648"
                                width="68.215"
                                height="68.215"
                                transform="rotate(45 48.2646 0.264648)"
                            />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_207_52485">
                            <path d="M44.8672 3.66207C46.7436 1.78572 49.7857 1.78573 51.6621 3.66208L93.1025 45.1025C94.9789 46.9789 94.9789 50.021 93.1025 51.8974L51.6621 93.3378C49.7857 95.2142 46.7436 95.2142 44.8672 93.3378L3.42678 51.8974C1.55043 50.021 1.55044 46.9789 3.42678 45.1025L44.8672 3.66207Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default LayerDiamond;

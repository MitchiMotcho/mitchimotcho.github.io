export default function EmailSignature() {
    return (
        <table
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
            style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}
        >
            <tr>
                <td
                    style={{
                        background: "#FDFBF8",
                        borderRadius: "12px",
                        padding: "12px 14px",
                        border: "1px solid rgba(122,59,59,0.10)",
                    }}
                >
                    <table cellPadding="0" cellSpacing="0" role="presentation">
                        <tr>
                            {/* Logo */}
                            <td
                                style={{
                                    verticalAlign: "middle",
                                    paddingRight: "14px",
                                }}
                            >
                                <img
                                    src="/assets/logo.png"
                                    alt="Mitchi Motcho Logo"
                                    width={70}
                                    style={{
                                        display: "block",
                                        borderRadius: "10px",
                                    }}
                                />
                            </td>

                            {/* Text block */}
                            <td
                                style={{
                                    verticalAlign: "middle",
                                    borderLeft: "2px solid #E37A6D",
                                    paddingLeft: "14px",
                                }}
                            >
                                <p
                                    style={{
                                        margin: "0 0 2px 0",
                                        fontSize: "15px",
                                        fontWeight: 700,
                                        color: "#7A3B3B",
                                    }}
                                >
                                    Mo Nakouzi{" "}
                                    <span
                                        style={{
                                            fontWeight: 400,
                                            color: "#7A3B3B",
                                        }}
                                    >
                                        | Developer
                                    </span>
                                </p>
                                <p
                                    style={{
                                        margin: "0 0 8px 0",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "#7A3B3B",
                                    }}
                                >
                                    Mitchi Motcho Websites
                                </p>

                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "13px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#333",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Email:&nbsp;
                                    </span>
                                    <a
                                        href="mailto:contact@motchi.ca"
                                        style={{
                                            color: "#E37A6D",
                                            textDecoration: "none",
                                        }}
                                    >
                                        contact@motchi.ca
                                    </a>
                                    <br />
                                    <span
                                        style={{
                                            color: "#333",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Web:&nbsp;
                                    </span>
                                    <a
                                        href="https://motchi.ca"
                                        style={{
                                            color: "#E37A6D",
                                            textDecoration: "none",
                                        }}
                                    >
                                        motchi.ca
                                    </a>
                                </p>
                            </td>
                        </tr>
                    </table>

                    {/* Soft divider */}
                    <div
                        style={{
                            height: "1px",
                            background: "rgba(122,59,59,0.12)",
                            margin: "10px 0 8px 0",
                        }}
                    ></div>

                    {/* Tagline */}
                    <p
                        style={{
                            margin: 0,
                            fontSize: "12px",
                            color: "#6B6B6B",
                        }}
                    >
                        Friendly, modern, and worry-free websites — we handle
                        the tech so you don’t have to.
                    </p>
                </td>
            </tr>
        </table>
    );
}

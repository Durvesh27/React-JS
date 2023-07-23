import './Mens-Multiple-products.css'
function MensCard(props) {
    return (
        <div style={{ width: "24%", paddingBottom: "20px" }} >
            <div style={{ display: "inline-block", position: "relative", paddingBottom: " 15px" }} className="inline">
                <img src={props.imgsrc} style={{ width: "100%", height: "273px" }} alt="" />
                <div style={{ paddingLeft: "5px" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 600 }}>{props.primary}</h2>
                    <p style={{ fontSize: "14.5px", color: "#7A7A7A", marginBottom: "5px" }}>{props.secondary}</p>
                    <p style={{ fontSize: "14px", marginBottom: "5px" }}><span><b>{props.price1}</b></span><span style={{ textDecoration: "line-through", marginLeft: "5px" }}>{props.price2}</span></p>
                    <span style={{ fontSize: "13px", fontWeight: 600, border: "1px solid grey", borderRadius: "9px", padding: "0 5px" }}>{props.rating} <i class="fa-solid fa-star fa-xs" style={{ color: "green" }}></i></span><span style={{ fontSize: "14px", marginLeft: "5px", color: "grey" }}>{props.qty}</span>
                    <p style={{ fontSize: "13px", color: "#4B4B4B", fontWeight: 600, margin: "3px 0" }}>{props.priceDisc} <span style={{ color: "#E76A94", fontWeight: 700 }}>{props.priceDrop}</span></p>
                    <p style={{ color: "#D83C1A", fontSize: "13px", fontWeight: 600 }}>{props.limStock}</p>
                </div>
                <div style={{ padding: "4px", position: "absolute", top: "8px", right: "8px", border: "1px solid #d5d5d5", boxShadow: "0px 0px 4px rgb(216 216 216 / 32%);", background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" alt="" />
                </div>
                <div style={{ padding: "4px", position: "absolute", top: "230px", left: "161px", border: "1px solid #d5d5d5", boxShadow: "0px 0px 4px rgb(216 216 216 / 32%);", background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default MensCard;
const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        width: "200px", // عرض ثابت ومناسب للبوكيمونات بجانب بعضها
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.2s", // لإضافة حركة خفيفة عند تمرير الماوس
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default Card;

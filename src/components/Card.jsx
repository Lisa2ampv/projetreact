export function Card() {
    return (
      <div className="card">
        <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"alt="" />
        <div className="card-infos">
          <p className="card-title">MONTRE</p>
          <p className="card-description">JOLI</p>
          <p className="card-price">125</p>
        </div>
      </div>
    );
  }
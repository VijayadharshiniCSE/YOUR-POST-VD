import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>YOUR POST</h1>

      <div className="post-card">
        <h3>Yogesh</h3>
        <p>This is our website image...</p>

        <img
          src="https://via.placeholder.com/400x200"
          alt="post"
        />

        <div className="actions">
          <span>❤️ Like</span>
          <span>💬 Comment</span>
        </div>
      </div>
    </div>
  );
}
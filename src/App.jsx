import "./App.css";
import Table from "./components2/Table";

function App() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">MANAGER USER</h5>
              </div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

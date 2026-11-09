/* =====================================================
   LOGIN
===================================================== */

function login() {

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("login-error");


    if (username === "" || password === "") {

        error.textContent =
            "Please enter both username and password.";

        return;
    }


    /*
        DEMO LOGIN

        Any username and password will work.
    */

    window.location.href = "dashboard.html";

}


/* =====================================================
   CRIMINAL DATA
===================================================== */

const criminalData = {

    A: {
        name: "Criminal A",
        risk: "HIGH",
        cases: "07",
        associates: "04",
        network: "Gang X",
        connections:
            "Criminal B, Criminal C and Gang X"
    },

    B: {
        name: "Criminal B",
        risk: "MEDIUM",
        cases: "04",
        associates: "02",
        network: "Gang X",
        connections:
            "Criminal A and Criminal D"
    },

    C: {
        name: "Criminal C",
        risk: "HIGH",
        cases: "06",
        associates: "03",
        network: "Gang X",
        connections:
            "Criminal A, Criminal E and Location LOC-17"
    },

    D: {
        name: "Criminal D",
        risk: "LOW",
        cases: "02",
        associates: "01",
        network: "Gang X",
        connections:
            "Criminal B"
    },

    E: {
        name: "Criminal E",
        risk: "MEDIUM",
        cases: "03",
        associates: "02",
        network: "Gang X",
        connections:
            "Criminal C and Gang X"
    }

};


/* =====================================================
   SHOW CRIMINAL
===================================================== */

function showCriminal(id) {

    const person = criminalData[id];

    const details =
        document.getElementById("detailsPanel");


    let riskClass = "risk-low";

    if (person.risk === "HIGH") {

        riskClass = "risk-high";

    } else if (person.risk === "MEDIUM") {

        riskClass = "risk-medium";

    }


    details.innerHTML = `

        <h2>👤 Entity Details</h2>

        <div class="profile-header">

            <div class="profile-avatar">
                👤
            </div>

            <div>

                <h2>${person.name}</h2>

                <span class="risk-label ${riskClass}">
                    ${person.risk} RISK
                </span>

            </div>

        </div>


        <div class="detail-stats">

            <div class="detail-stat">

                <small>Cases</small>

                <strong>${person.cases}</strong>

            </div>


            <div class="detail-stat">

                <small>Associates</small>

                <strong>${person.associates}</strong>

            </div>


            <div class="detail-stat">

                <small>Network</small>

                <strong>${person.network}</strong>

            </div>

        </div>


        <div class="connection-info">

            <h3>🔗 Known Connections</h3>

            <p>
                ${person.connections}
            </p>

        </div>

    `;

}


/* =====================================================
   SHOW GANG
===================================================== */

function showGang() {

    const details =
        document.getElementById("detailsPanel");


    details.innerHTML = `

        <h2>👥 Entity Details</h2>

        <div class="profile-header">

            <div
                class="profile-avatar"
                style="background:#ede9fe;"
            >
                👥
            </div>

            <div>

                <h2>Gang X</h2>

                <span
                    class="risk-label"
                    style="background:#ede9fe;color:#6d28d9;"
                >
                    ORGANIZED NETWORK
                </span>

            </div>

        </div>


        <div class="detail-stats">

            <div class="detail-stat">

                <small>Members</small>

                <strong>18</strong>

            </div>


            <div class="detail-stat">

                <small>Cases</small>

                <strong>12</strong>

            </div>


            <div class="detail-stat">

                <small>Risk</small>

                <strong>HIGH</strong>

            </div>

        </div>


        <div class="connection-info">

            <h3>🔗 Connected Profiles</h3>

            <p>
                Criminal A, Criminal B,
                Criminal C, Criminal D
                and Criminal E.
            </p>

        </div>

    `;

}


/* =====================================================
   SHOW LOCATION
===================================================== */

function showLocation() {

    const details =
        document.getElementById("detailsPanel");


    details.innerHTML = `

        <h2>📍 Entity Details</h2>

        <div class="profile-header">

            <div
                class="profile-avatar"
                style="background:#dcfce7;"
            >
                📍
            </div>

            <div>

                <h2>Location LOC-17</h2>

                <span
                    class="risk-label"
                    style="background:#dcfce7;color:#166534;"
                >
                    HIGH ACTIVITY
                </span>

            </div>

        </div>


        <div class="detail-stats">

            <div class="detail-stat">

                <small>Cases</small>

                <strong>09</strong>

            </div>


            <div class="detail-stat">

                <small>Profiles</small>

                <strong>06</strong>

            </div>


            <div class="detail-stat">

                <small>Activity</small>

                <strong>HIGH</strong>

            </div>

        </div>


        <div class="connection-info">

            <h3>📍 Location Intelligence</h3>

            <p>
                This location is associated with
                multiple profiles and network activities
                in the demonstration dataset.
            </p>

        </div>

    `;

}


/* =====================================================
   AI ANALYSIS
===================================================== */

function runAIAnalysis() {

    const panel =
        document.getElementById("aiPanel");


    panel.innerHTML = `

        <h2>🤖 AI Network Intelligence</h2>

        <div class="ai-result">

            <strong>✓ Analysis Completed</strong>

            <p>
                The demonstration AI model analyzed
                the displayed criminal network.
            </p>

        </div>


        <div class="ai-result">

            <p>
                <strong>Central Node:</strong>
                Criminal A
            </p>

            <p>
                <strong>Detected Network:</strong>
                Gang X
            </p>

            <p>
                <strong>High-Risk Profiles:</strong>
                2
            </p>

            <p>
                <strong>Connected Entities:</strong>
                7
            </p>

        </div>


        <div class="ai-result">

            <p>
                🧠 Relationship pattern detected
                between multiple criminal profiles
                through shared network connections.
            </p>

        </div>

    `;

}


/* =====================================================
   SEARCH
===================================================== */

function searchNetwork() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const nodes =
        document.querySelectorAll(".network-node");


    nodes.forEach(function(node) {

        const name =
            node.dataset.name.toLowerCase();


        if (
            searchValue === "" ||
            name.includes(searchValue)
        ) {

            node.style.opacity = "1";

            node.style.transform =
                "translate(-50%, -50%) scale(1)";

        } else {

            node.style.opacity = "0.2";

            node.style.transform =
                "translate(-50%, -50%) scale(0.9)";

        }

    });

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    window.location.href = "index.html";

}
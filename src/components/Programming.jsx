import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Chip from '@mui/material/Chip';



const platforms: Platform[] = [
  {
    name: "LeetCode",
    handle: "guptaji2611",
    url: "https://leetcode.com/u/guptaji2611/",
    stat: "400+ Problems Solved",
    sub: "Rating: 1500+ · Top 25%",
    blurb: "The daily grind — arrays, trees, DP, the works. 400+ problems in, still chasing a cleaner solution every time.",
    color: "#FFA116",
  },
  {
    name: "Codeforces",
    handle: "ujjwalgupta2611",
    url: "https://codeforces.com/profile/ujjwalgupta2611",
    stat: "Rating: 800+",
    sub: "Graph theory, DP, greedy, number theory",
    blurb: "Contests are where theory meets the clock. Codeforces keeps me honest about how fast I can actually think.",
    color: "#1F8ACB",
  },
  {
    name: "CodeChef",
    handle: "ujjwal2611",
    url: "https://www.codechef.com/users/ujjwal2611",
    stat: "Rating: 1000+",
    sub: "Long & short contests",
    blurb: "A different rhythm from Codeforces — longer problems that reward patience as much as speed.",
    color: "#815c3b",
  },
  {
    name: "CodingNinjas",
    handle: "boyujjwal",
    url: "https://www.naukri.com/code360/profile/boyujjwal",
    stat: "Rating: 1500+",
    sub: "Structured DSA practice",
    blurb: "Where I go to drill a topic systematically before taking it into a live contest.",
    color: "#e05a1c",
  },
  {
    name: "GeeksforGeeks",
    handle: "guptaji2611",
    url: "https://www.geeksforgeeks.org/user/guptaji2611/",
    stat: "100+ Problems Solved",
    sub: "Arrays, Trees, Graphs, DP",
    blurb: "My go-to for revisiting fundamentals — especially graph and tree problems before a contest.",
    color: "#2f8d46",
  },
];

function Programming() {
  return (
    <div id="programming" style={{ padding: '60px 0' }}>
      <div className="items-container">
        <h1>Competitive Programming</h1>
        <p style={{ opacity: 0.7, marginBottom: '40px', maxWidth: '600px' }}>
          I solve problems across five platforms because each one trains a different muscle — speed, depth, structure, or plain consistency.
        </p>
        <div className="programming-grid">
          {platforms.map((p) => (
            <div className="programming-card" key={p.name}>
              <div className="programming-card-header">
                <div className="platform-avatar" style={{ background: p.color }}>
                  {p.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>{p.name}</h3>
                  <p style={{ margin: 0, opacity: 0.6, fontSize: '0.85rem' }}>@{p.handle}</p>
                </div>
              </div>
              <div className="programming-stat">
                <Chip label={p.stat} size="small" style={{ background: p.color, color: 'white', fontWeight: 600 }} />
                <span style={{ opacity: 0.6, fontSize: '0.8rem', marginLeft: '8px' }}>{p.sub}</span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '12px 0' }}>{p.blurb}</p>
              <a href={p.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: p.color }}>
                <OpenInNewIcon style={{ fontSize: '1rem' }} /> View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programming;

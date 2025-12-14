import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/jobs", async (req, res) => {
  try {
    let allResults = [];

    for (let page = 1; page <= 5; page++) {
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/gb/search/${page}?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&results_per_page=50`
      );

      const data = await response.json();
      if (!data.results) continue;

      allResults = [...allResults, ...data.results];
    }

    const cleaned = allResults.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company?.display_name || "Unknown Company",
      location:
        job.location?.display_name ||
        (job.location?.area?.length ? job.location.area.join(", ") : "Unknown"),
      salary: job.salary_min || job.salary_max || "Not provided",
    }));

    res.json(cleaned);

  } catch (error) {
    console.log("API ERROR", error);
    res.status(500).json({ error: "API fetch failed" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));

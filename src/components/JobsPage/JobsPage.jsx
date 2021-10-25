import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import JobCard from "../../utils/JobCard/JobCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { jobsActions } from "../../store/jobsSlice";
import "./JobsPage.css";
import { Link, useLocation, useHistory } from "react-router-dom";

const BASE_URL = "https://jobs-api.squareboat.info/api/v1";
let start = 0;
let end = 9;
let resultPerPage = 12;
let jobs = [];
let nextDisable = false;
let prevDisable = false;

const JobsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [jobsFetch, setJobsFetch] = useState('');

  const queryParams = new URLSearchParams(location.search);

  let page = queryParams.get("page");
  if (page === null) {
    page = +0;
  }
  let token = useSelector((state) => state.loginSlice.loginToken);
  let allJobs = useSelector((state) => state.jobsSlice.allJobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/recruiters/jobs`, {
          headers: { Authorization: `${token}` },
        });
        let jobs = res.data.data.data;
        // console.log(jobs);
        dispatch(jobsActions.setJobs(jobs));
        setJobsFetch(true)
      } catch (e) {
        dispatch(jobsActions.setJobs([]));
        setJobsFetch(false)

      }
    };

    fetchJobs();

    // eslint-disable-next-line
  }, [token,jobsFetch]);

  const populateData = () => {
    jobs = [];
    start = +page * resultPerPage;
    end = parseInt(+page + 1) * resultPerPage - 1;
    if (end > allJobs.length) {
      end = allJobs.length - 1;
    }
    if (end <= allJobs.length) {
      nextDisable = false;
    }

    if (end === allJobs.length - 1) {
      nextDisable = true;
    }

    if (start > 0) {
      prevDisable = false;
    } else if (+page === 0 || +start === 0) {
      prevDisable = true;
    }

    for (let i = start; i <= end; i++) {
      jobs.push(allJobs[i]);
    }
  };

  populateData();


  function nextPage() {
    history.push("/jobs?page=" + parseInt(+page + 1));
  }

  function prevPage() {
    history.push("/jobs?page=" + parseInt(page - 1));
  }

  return (
    <>
      <div style={{ backgroundColor: "#1A253C", height: "150px" }}>
        <Container
          style={{
            display: "flex",
            // justifyContent: "center",
            padding: "50px 50px 0px 100px",
          }}
        >
          <h3 style={{ color: "#fff" }}>Jobs posted by you</h3>
        </Container>

        {allJobs.length >= 1 && (
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "80%",
                margin: "20px auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {jobs.map((el) => (
                <JobCard
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  description={el.description}
                  location={el.location}
                />
              ))}
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "50px" }}>
                <button onClick={prevPage} disabled={prevDisable}>
                  Prev
                </button>
                <span style={{ opacity: 1, margin: "10px" }}>{+page + 1}</span>
                <button onClick={nextPage} disabled={nextDisable}>
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {allJobs.length === 0 && (
        <div
          style={{ width: "100vw", background: "#D9EFFF", height: "66.8vh" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ height: "170px", marginBottom: "16px" }}
              src="https://icon-library.com/images/file-icon-image/file-icon-image-22.jpg"
              alt="fileIcon"
            />
            <p>Your Posted jobs will appear here</p>
            <Link to="/postjob">
              <Button>Post a Job</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default JobsPage;

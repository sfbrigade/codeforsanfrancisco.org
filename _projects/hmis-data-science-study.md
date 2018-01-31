---
  title: "HMIS Data Science Study"
  blurb: "What variables best predict whether a homeless individual, of one segment or another, ends up 'permanent housing'?"
  skills_needed: 
    - "none right now"
  repos: 
    - ""
  app_link: "https://github.com/sfbrigade/datasci-sf-homeless-project"
  license: null
  project_status: "beta"
  project_lead: null
  project_members: null
  image_path: "http://datascience.codeforsanfrancisco.org/wp-content/uploads/2016/10/sf-homeless-data-analysis-750x330.jpg"
  active: true
  tags: 
    - "inferential statistics"
    - "regression analysis"
    - "homelessness"
    - "data science"
---
HMIS Data Science Study

Members of the Data Science Working Group at Code for San Francisco have been charged with answering the Community Technology Alliance’s prompt about homelessness programs.

Prompt

What variables best predict whether an individual is categorized as ‘in permanent housing’ as an outcome, by population segment:

Veterans
Chronically Homeless
Continuously Homeless
Has Disabling Condition
Domestic Violence Victim
Male/Female
Latino/Non-Latino
Data

Data is in HMIS format, a data standard defined by the US Department of Housing and Urban Development

Results

View the HMIS Data Science Study Presentation for a summary of our findings

Featured Notebooks

Load and clean the data
Explore the data
Feature engineering to prepare input variables
Make outcome predictions with logistic regression model
Setup

Install Jupyter Notebook; this is most easily done by installing Anaconda: https://www.continuum.io/downloads

Install seaborn. To do this in a new conda environment:
conda create --name datasci seaborn

To deactivate/activate the environment:
source deactivate datasci
source activate datasci

Get Started

Fork this repository and clone it locally.
Locate the dataset (pinned in #datasci-homeless on Slack).
Run jupyter notebook
Navigate to notebooks/load_data_example_v2.ipynb to start exploring the data.
Additional information on completed and open items can be found in the pinned documents in #datasci-homeless.
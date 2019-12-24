# Report Generator

**TODO:** put all of this in a github project

## NFR + MVP
- [ ] get devtools working somehow
- [ ] Windows 10 / WSL browser bug
- [ ] test on macos

### Basics
- [ ] test `electron-store`
- [ ] build app successfully
- [ ] add Skeleton's Raleway font locally (or replace with something cooler)

## General
- [ ] Context menu - copy + paste!
- [ ] Remove file menu etc
- [ ] adding signature?

### Routes
- [x] `/`
- [x] `/reports`
- [x] `/reports/new`
- [ ] `/reports/:reportId`
- [ ] `/profiles/:reportId`

### Delete
- [ ] all reporter data
- [ ] all report data
- [ ] all reportee data

### Create - Meta
- [ ] add reportee details
- [ ] add reporter details

### Create - Report
- [ ] fill out report
- [ ] add top level paragraph
  - [ ] select from options
- [ ] add second level paragraph
  - [ ] select from options
- [ ] add third level paragraph
  - [ ] select from options

### Read
- [ ] Toggle showing paragraph options

### add basic templating
- [ ] populate from filesystem (nested folders, individual docs for paragraphs?)
- [ ] user input paragraphs

### Output word `.docx`
- [ ] just paragraphs
- [ ] interpolated data
Reportee:
  - [ ] name
  - [ ] age
  - [ ] gender
  - [ ] DoB
  - [ ] Age at assessment
  - [ ] School
  - [ ] School year
  - [ ] Date of assessment(s)
  - [ ] Reason for referral
  - [ ] Assessed by (reporter)
  - [ ] Date of report

Reporter:
  - [ ] Name
  - [ ] Role
  - [ ] Phone number
  - [ ] Email
  - [ ] Website

- [ ] formatted headers and footers

## Tranche 1 - 'MVP'

### General
- [ ] Get a list of pronouns. `$$REPORTEE_NAME$$`, `$$REPORTER_NAME` etc etc

### UX Goodness
- [ ] Active route button state
- [ ] Use `bs-css` or similar css-in-js (bs) solution instead of `src/css/custom.css`

### Reporter and reportee data
- [ ] Reporter can save their progress in the report.
- [ ] Reporter can delete a report.
- [ ] Reporter can add information about themselves for the report (Name, Role, Phone number, Email, Website).
- [ ] Reporter can add information about the reportee used throughout the report (Name, Gender, DoB, Age at assessment, School and Year, Date of assessment(s), Reason for referral, Assessed by, Date of report). Aspects of this, gender, for example, will be used to populate the report appropriately with pronouns.

### Report Template
- [ ] User can add a report and nested options by adding a `.docx` Word doc with the appropriate tags.

### Create a report
- [ ] Reporter can see notes relating to each section
Reporter can fill out the report by:
- [ ] adding a top level paragraph
  - [ ] selecting from options
- [ ] add second level paragraph
  - [ ] selecting from options
- [ ] add third level paragraph
  - [ ] selecting from options

- [ ] a `.docx` report is generated from the results.

### Collaboration
- [ ] Reporters can collaborate on output `.docx` only, once it is finished.

## Tranche 2

### Reporter and reportee data
- [ ] Reporter can add information about themselves for the report (Name, Role, Phone number, Email, Website, Signature image)
- [ ] Reporter can add information about the reportee used throughout the report (Name, Gender, DoB, Age at assessment, School and Year, Date of assessment(s), Reason for referral, Assessed by, Date of report). Aspects of this, gender, for example, will be used to populate the report appropriately with pronouns.

### Report Template
- [ ] Reporter can add extra template paragraphs with formatting directly to the app.
- [ ] Reporter can re-order segments of data before finishing + publishing it.

### Collaboration
- [ ] Reporters can share and collaborate on the report in the app itself.

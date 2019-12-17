# Report Generator

**TODO:** put all of this in a github project

## NFR
- [ ] get devtools working somehow
- [ ] Windows 10 / WSL browser bug
- [ ] test on macos

## MVP

### Basics
- [ ] test `electron-store`
- [ ] build app successfully

### Routes
- [ ] `/`
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
  - [ ] reportee name
  - [ ] reportee age
  - [ ] reportee gender
  - [ ] reporter name
  - [ ] reporter contacts
- [ ] formatted headers and footers

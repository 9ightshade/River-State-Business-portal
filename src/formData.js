const formData = [

  {
    id: 1,
    label: 'Personal Information',
    fields: [
      { name: 'title', label: 'Title', required: true, type: 'select', options: ['Dr', 'Mrs', 'Miss', 'Prof', 'Mr'] },
      { name: 'firstName', label: 'First Name', required: true, type: 'text' },
      { name: 'middleName', label: 'Middle Name', required: true, type: 'text' },
      { name: 'lastName', label: 'Last Name', required: true, type: 'text' },
      { name: 'email', label: 'Email', required: true, type: 'email' },
      { name: 'sex', label: 'Sex', required: true, type: 'select', options: ['male', 'female'] },
      { name: 'maritalStatus', label: 'Marital Status', type: 'select', required: true, options: ['single', 'married'] },
      { name: 'dateOfBirth', label: 'Date of Birth', required: true, type: 'date' },
      { name: 'address', label: 'Address', required: true, type: 'text' },
      { name: 'religion', label: 'Religion', required: true, type: 'text' },
      { name: 'phone', label: 'Phone', required: true, type: 'tel' },
      { name: 'physicalChallenge', label: 'Physical Challenge', required: true, type: 'text' },
      { name: 'photo', label: 'Upload Photo', required: true, type: 'file' },



      //  { name: 'listOfPrograms', label: 'List Of Program', type: 'select', options:["PGDBA","MBA", "M.Sc", "DBA"] },
      // { name: 'listOfCourses', label: 'List Of Courses', type: 'select', options:["Accounting", "Management", "Marketing", "Finance", "ICT Management", "Supply Chain and Logistics Management", "Procurement and Contract Management", "Healthcare and Hospital Management", "Human Resource Management"] },


      // { name: 'telePhone', label: 'Telephone', type: 'tel' },

      // { name: 'placeOfBirth', label: 'Place of Birth', type: 'text' },
      // { name: 'citizenship', label: 'Citizenship', type: 'text' },

      // { name: 'typeOfIdentification', label: 'Type of Identification', type: 'text' },
      // { name: 'identificationNumber', label: 'Identification Number', type: 'text' },

      // { name: 'disabilities', label: 'Disabilities', type: 'text' }
    ]
  },
  {
    id: 2,
    label: 'Emergency Contact',
    fields: [
      { name: 'nameOfNextOfKin', label: 'Name', type: 'text' },
      { name: 'relationshipWithNextOfKin', label: 'Relationship', type: 'text' },
      { name: 'telephoneNumberOfNextOfKin', label: 'Number', type: 'tel' },
      { name: 'emailOfNextOfKin', label: 'Email', type: 'email' },
      { name: 'addressOfNextOfKin', label: 'Address', type: 'text' },
    ]
  },
  {
    id: 3,
    label: 'Education Information',
    fields: [
      { name: 'nameOfSchool', label: 'Name of School', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'country', label: 'Country', type: 'select', options: ['USA', 'Canada', 'UK', 'Australia'] }, // Add more countries as needed
      { name: 'periodAttended', label: 'Period Attended', type: 'text' },
      { name: 'numberOfYearsSpend', label: 'Number of Years Spent', type: 'text' },
      { name: 'nameOfCertificationAwarded', label: 'Name of Certification Awarded', type: 'text' },
      { name: 'secondaryInformation', label: 'Secondary Information', type: 'text' }
    ]
  },
  {
    id: 4,
    label: 'Work Experience',
    fields: [
      { name: 'areYouEmployed', label: 'Are you employed?', type: 'select', options: ['Yes', 'No'] },
      { name: 'companyName', label: 'Company Name', type: 'text' },
      { name: 'position', label: 'Position', type: 'text' },
      { name: 'duration', label: 'Duration', type: 'text' }
    ]
  },
  {
    id: 5,
    label: 'Additional Information',
    fields: [
      { name: 'howYouLearnAboutUs', label: 'How did you learn about RSUBS?', type: 'checkbox', options: ['college Guide', 'Newspaper', 'TV/Radio', 'Mailing', 'RSUBS Website', 'Parent', 'Exhibition', 'Relative', 'RSUBS Student', 'RSU Faculty', 'Friends', 'School Teacher', 'RSUBS Alumni', 'RSUBS Representative', 'others (specify)'] },
      { name: 'areYouEmployed', label: 'Are you employed?', type: 'select', options: ['Yes', 'No'] },
      { name: 'companyName', label: 'Company Name', type: 'text' },
      { name: 'position', label: 'Position', type: 'text' },
      { name: 'duration', label: 'Duration', type: 'text' }
    ]
  },
  {
    id: 6,
    label: 'Enrollment Information',
    fields: [
      { name: 'enrollmentInformation', label: 'Enrollment Information', type: 'checkbox', options: ['Doctorate in Business Administration (DBA)', 'Masters in Business Administration (MBA)', 'Master of Sciences (MSC) – Short Course', 'Post Graduate Diploma (PGD)'] }
    ]
  },
  {
    id: 7,
    label: 'Area of Specialization',
    fields: [
      { name: 'specialization', label: 'Area of Specialization', type: 'checkbox', options: ['Accounting', 'Finance', 'Healthcare and Hospital Management', 'Human Resource Management', 'Management', 'Marketing', 'Office and Information Management', 'Procurement and Contract Management', 'Project Management', 'Supply Chain and Logistics Management'] }
    ]
  },
  {
    id: 8,
    label: 'Application Checklist',
    fields: [
      { name: 'applicationChecklist', label: 'Application Checklist', type: 'checkbox', options: ['Non-refundable Application Fee', 'Complete and signed application form', 'An official degree transcript for each college or professional school previously attended', 'Originals and a copy of all supportive documents', 'One (1) recent passport size photograph (write your name on the reverse side)', 'Copy of National Identity Card or Birth Certificate', 'An official translation of academic records (where applicable)', 'A current financial guarantee letter', 'Applicant’s Copy of National Passport', 'Sponsor’s copy of National Passport'] }
    ]
  }
];

export default formData;
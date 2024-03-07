const [
  Abdominal Pain, Adult
Abdominal Pain, Child
Abdominal Swelling
Abrasions
Alcohol Problems
Allergic Reaction
Altered Mental Status (AMS)
Ankle Injury
Ankle Problems
Anxiety
Appetite Loss, Adult
Appetite Loss, Child
Arm or Hand Problems
Asthma
Avian Influenza (“Bird Flu”) Exposure
Back/Neck Injury
Back Pain
Bad Breath
Bedbug Exposure or Concerns
Bed-Wetting
Bee Stings
Bites, Animal/Human
Bites, Insect
Bites, Marine Animal
Bites, Snake
Bites, Tick
Bleeding, Severe
Blood/Body Fluid Exposure
Bone, Joint, and Tissue Injury
Breast-Feeding Problems
Breast Problems
Breathing Problems
Bruising
Burns, Chemical
Burns, Electrical
Burns, Thermal
Cast/Splint Problems
Chest Pain
Chest Trauma
Chickenpox
Child Abuse
Choking
Circumcision Care
Cold Exposure Problems
Common Cold Symptoms
Confusion
Congestion
Congestive Heart Failure
Constipation
Contact Lens Problems
Contraception, Emergency (EC)
Cough
Croup
Crying, Excessive, in Infants
Dehydration
Depression
Diabetes Problems
Diaper Rash
Diarrhea, Adult
Diarrhea, Child
Dizziness
Domestic Abuse
Drowning (Near Drowning)
Earache, Drainage
Ear Injury, Foreign Body
Ear Ringing
Ebola: Known or Suspected Exposure
Electric Injury
Extremity Injury
Eye Injury
Eye Problems
Facial Problems
Facial Skin Problems
Fainting
Falls
Fatigue
Feeding Tube Problems
Fever, Adult
Fever, Child
Finger and Toe Problems
Food Allergy, Known or Suspected
Food Poisoning, Suspected
Foot Problems
Foreign Body, Eye
Foreign Body, Inhaled
Foreign Body, Nose
Foreign Body, Rectum
Foreign Body, Skin
Foreign Body, Swallowing of
Foreign Body, Vagina
Frostbite
Gas/Belching
Gas/Flatulence
Genital Lesions
Genital Problems, Male
Glands, Swollen or Tender
Hair Loss
Hand/Wrist Problems
Hay Fever Problems
Headache
Head Injury
Hearing Loss
Heartburn
Heart Rate Problems
Heat Exposure Problems
Hemorrhoids
Hepatitis
Hiccups
Hip Pain/Injury
Hives
HIV Exposure
Hoarseness
Hospice Problems
Hypertension
Hyperventilation
Hypotension
Immunization, Tetanus
Immunization Reactions
Impetigo
Incontinence, Stool
Incontinence, Urine
Indigestion
Influenza
Insomnia
Intravenous Therapy Problems
Itching
Jaundice
Jaw Pain
Joint Pain/Swelling
Knee Pain/Swelling/Injury
Laceration
Leg Pain/Swelling
Lice
Menstrual Problems
Mouth Problems
Mumps
Muscle Cramps
Neck Pain
Neurologic Symptoms
Newborn Problems
Nosebleed
Nose Injury
Numbness and Tingling
Ostomy Problems
Overdose
Pertussis (Whooping Cough)
Piercing/Pocketing Problems
Pinkeye
Pinworms
Poisoning, Suspected
Postoperative Problems
Postpartum Problems
Pregnancy, Cold Symptoms
Pregnancy, Fetal Movement Problems
Pregnancy, Hypertension
Pregnancy, Leaking Vaginal Fluid
Pregnancy, Nausea and Vomiting
Pregnancy Problems
Pregnancy, Suspected Labor
Pregnancy, Suspected Labor < 36 Weeks
Pregnancy, Urination Problems
Pregnancy, Vaginal Bleeding
Puncture Wound
Rash, Adult
Rash, Child
Rectal Bleeding
Rectal Problems
Reye Syndrome, Suspected
Roseola
Rubella (German Measles)
Rubeola (Measles)
Scabies
Scrotal Problems
Seizure
Seizure, Febrile
Severe Acute Respiratory Syndrome (SARS)
Sexual Assault
Sexually Transmitted Disease (STD)
Shingles: Suspected or Exposure
Shock, Suspected
Shoulder Pain/Injury
Sickle Cell Disease Problems
Sinus Problems
Skin Lesions: Lumps, Bumps, and Sores
Sleep Apnea, Adult
Sleep Apnea, Infant
Sore Throat
Speaking Difficulty
Spitting Up, Infant
Stools, Abnormal
Stye
Substance Abuse, Use, or Exposure
Suicide Attempt, Threat
Sunburn
Swallowing Difficulty
Sweating, Excessive
Swelling
Swine Flu (H1N1 Virus) Exposure
Tattoo Problems
Teething
Tongue Problems
Toothache
Tooth Injury
Umbilical Cord Care
Urinary Catheter/Nephrostomy Tube Problems
Urination, Difficult
Urination, Excessive
Urination, Painful
Urine, Abnormal Color
Vaginal Bleeding
Vaginal Discharge/Pain/Itching
Vision Problems
Vomiting, Adult
Vomiting, Child
Weakness
West Nile Virus
Wheezing
Wound Care: Sutures or Staples
Wound Healing and Infection
]

const bodySystem = [
  'Neurologic & Head Problems' = [
    'Altered Mental Status (AMS)' = [
      {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause If Known', 'Medications', 'Prior History' ],
        otherProtocolstoConsider: [ 'Alcohol Problems', 'Breathing Problems (101)', 'Chest Pain (118)', 'Confusion (142)', 'Dehydration (173)', 'Diabetes Problems (180)', 'Dizziness (192)', 'Fainting (228)', 'Fever, Adult (241)', 'Child (244)', 'Headache (303)', 'Heart Rate Problems (317)', 'Seizure (530)', 'Seizure Febrile (533)', 'Substance Abuse, Use, or Exposure (581)', 'Urination, Difficult' ],
        nurseAlert: 'Signs of altered mental status may include: confusion; irritability; less responsive to voice or touch; drowsiness; combative; uncooperative; nonsensical verbalizing; sudden change in behavior, thinking process, or ability to communicate; auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations. • AMS may be one of the first indicators of a UTI, dehydration, or a stroke in the elderly. • In a child, AMS may be one of the first indicators of rapidly progressing meningitis or a head injury after trauma.',
        alertBullets: '',
        assessment: [
          { A: 'Is the following present?',
            list: ['Unconsciousness', 'not breathing'],
            true: 'Call ambulance and begin CPR'
          },
          { B: 'Are any of the following present?',
            list: [ 'Loss of consciousness more than once during the day', 'Unresponsive at the time of the call', 'Drug/alcohol overdose', 'Difficulty breathing', 'AMS and any of the following' = [ 'Severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'diabetic and unresponsive to home care measures', 'pregnancy, vaginal bleeding, or abdominal pain', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body' ], 'Persistent AMS', 'Drowsiness and difficulty in arousing' ],
            true: '“Call ambulance” and “Give person with diabetes and AMS immediate source of sugar” and See Home Care Instructions'
          },
          { C: 'If person arouses easily, are any of the following present?',
            list: [ 'Headache, fever, or stiff and painful neck', 'Recent head injury or trauma', 'New seizure or prolonged postictal state', 'Persistent high fever', 'New onset of auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations or delusions' ],
            true: '“Seek emergency care now”'
          },
          { D: 'Is the following present?',
            list: [ 'Brief episode of loss of consciousness' ],
            true: 'Go to Fainting Protocol (228) “Seek medical care within 2 to 4 hours if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [
          'Keep person safely lying down until fully awake and responsive.',
          'Turn person on side if vomiting.',
          'Do not leave person unattended.',
          'If person has diabetes and experiences a sudden change in level of consciousness, give source of sugar immediately but only if person is awake enough to eat or drink. Good sources of sugar include orange juice, flavored drink mixes (such as Kool-Aid), cola, or candy.',
          'If event is alcohol- or drug-related, see also Alcohol Problems protocol and Substance Abuse, Use, or Exposure protocol (581). For future assistance, contact local resources for assistance: counseling, detoxification programs, inpatient/outpatient treatment programs, AA, or Al-Anon.'
        ],
        reportToPCP: [ 'No improvement or condition worsens' ],
        seekEmergencyCare: [ 'Loss of consciousness > 1 time during the day', 'Difficulty breathing', 'AMS and any of the following:', 'severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body', 'persistent AMS', 'drowsiness and difficulty in arousing', 'headache, fever, or stiff and painful neck' ],
        footnote: 'If the caller agrees with the advice given, document the call, and encourage the caller to call back or see PCP if the problem worsens. If the caller does not agree with the advice given, reevaluate and advise the caller to follow up with PCP, Clinic, or ED.'
      }
    ],
    'Confusion' = [
      {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
        otherProtocolstoConsider: [ 'Alcohol Problems (22)', 'Altered Mental Status (29)', 'Fever, Adult (241), Child (244)', 'Headache (303)', 'Seizure (530)', 'Seizure, Febrile (533)', 'Substance Abuse, Use or Exposure (581)' ],
        nurseAlert: 'Signs of confusion may include irritability, less responsive to voice or touch, drowsiness, combative, uncooperative, nonsensical verbalizing, sudden change in behavior, thinking process, or ability to communicate, auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations.',
        alertBullets: [ 'In the elderly, confusion may be one of the first indicators of a UTI, dehydration, or a stroke.', 'In a child, confusion may be one of the first indicators of rapidly progressing meningitis or a head injury after trauma.' ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'History of recent head trauma', 'Exposure to chemicals or drug ingestion', 'Diabetes', 'History of stroke, high blood pressure, or cardiac disease', 'Disorientation to name, date, place, or situation', 'Fruity breath', 'Flushing or dry skin', 'Severe vomiting', 'Temperature > 102°F (38.9°C)', 'Stiff neck, severe headache, rigidity', 'Sudden weakness on one side of body', 'Facial drooping on one side with smile', 'Difficulty speaking', 'Sudden change in vision', 'Pale, diaphoretic, and light-headed or weak', 'Ill child and sudden change in behavior; combative, uncooperative, nonsensical verbalizing' ],
            true: 'Call ambulance or Seek emergency care now'
          },
          {
            B: 'Are any of the following present?',
            list: [  'New onset of hallucinations or paranoia', 'History of drug or alcohol abuse', 'Temperature > 101°F (38.3°C) in a child, the elderly,or immunosuppressed', 'Seizure disorder' ],
            true: 'Seek medical care within 2 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Currently taking medications known to cause confusion', 'Recently taking a new medication', 'Temperature > 101°F (38.3°C)', 'History of dementia or chronic brain syndrome and change in mental status', 'Recent abrupt cessation of drugs (OTC or prescription), alcohol, or caffeine' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'History of dementia or chronic brain syndrome and no change in status' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          },
        ],
        homeCareInstructions: [ 'If taking medications that can cause delirium (antihistamines, belladonna, alkaloids), discontinue use and call back or call PCP if no improvement within 1 hour.', 'Keep person comfortable in a well-lighted room in familiar surroundings and with someone in attendance.', 'Give usual medication for fever (such as acetaminophen). Give cool baths to reduce fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
        reportToPCP: [ 'Persistent confusion > 1 hour', 'Persistent confusion after fever is controlled', 'Other symptoms are present after delirium clears' ],
        seekEmergencyCare: ['Severe headache or stiff neck or rigidity', 'Sudden weakness on one side of body', 'Difficulty speaking', 'Pale, diaphoretic, and light-headed or weak', 'Hallucination, paranoia, or suicidal threat or attempt', 'Ill child and sudden change in behavior', 'Severe vomiting', 'Fruity breath', 'Flushing or dry skin' ],
        footnote: 'If the caller agrees with the advice given, document the call, and encourage the caller to call back or see PCP if the problem worsens. If the caller does not agree with the advice given, reevaluate and advise the caller to follow up with PCP, Clinic, or ED.'
      }
    ],
    'Dizziness' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Facial Problems' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Fainting' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Headache' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Headache: Causes and Characteristics (Appendix T)' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Head Injury' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Insomnia' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Neurologic Symptoms' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Numbness and Tingling' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Seizure' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Seizure, Febrile' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Sinus Problems' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
    'Speaking Difficulty' = [
      {
        keyQuestions: '',
        otherProtocolstoConsider: '',
        nurseAlert: '',
        alertBullets: '',
        assessment: [],
        homeCareInstructions: [],
        reportToPCP: '',
        seekEmergencyCare: '',
        footnote: ''
      }
    ],
  ],
  Eyes = [
    { 'Contact Lens Problems' : [] },
    { 'Eye Injury' : [] },
    { 'Eye Problems' : [] },
    { 'Foreign Body, Eye' : [] },
    { 'Pinkeye' : [] },
    { 'Vision Problems' : [] }
  ],
  Ears = [
    { 'Earache, Drainage': [] },
    { 'Ear Injury, Foreign Body': [] },
    { 'Ear Ringing': [] }
  ],
  Nose = [
    { 'Common Cold Symptoms': [] },
    { 'Congestion': [] },
    { 'Foreign Body, Nose': [] },
    { 'Nosebleed': [] },
    { 'Nose Injury': [] }
  ],
  Throat/Mouth = [
    Bad Breath
    Foreign Body, Swallowing of
    Jaw Pain
    Mouth Problems
    Sore Throat
    Swallowing Difficulty
    Tongue Problems
    Toothache
    Tooth Injury
  Back/Neck Problems
    Back/Neck Injury
    Back Pain
    Neck Pain
  Chest/Cardiovascular Problems
    Bleeding, Severe
    Chest Pain
    Chest Pain: Causes and Characteristics (Appendix S)
    Chest Trauma
    Heartburn
    Heart Rate Problems
    Hypertension
    Hypotension
    Shock, Suspected
  Respiratory Problems
    Allergic Reaction
    Asthma
    Breathing Problems
    Choking
    Common Cold Symptoms
    Congestion
    Congestive Heart Failure
    Cough
    Croup
    Drowning (Near Drowning)
    Facial Problems
    Foreign Body, Inhaled
    Hay Fever Problems
    Hoarseness
    Hyperventilation
    Influenza
    Sleep Apnea, Adult
    Sleep Apnea, Infant
    Wheezing
  Gastrointestinal Problems
    Abdominal Pain, Adult
    Abdominal Pain, Child
    Abdominal Pain: Causes and Characteristics (Appendix R)
    Appetite Loss, Adult
    Appetite Loss, Child
    Constipation
    Diarrhea, Adult
    Diarrhea, Child
    Feeding Tube Problems
    Food Allergy, Known or Suspected
    Food Poisoning, Suspected
    Foreign Body, Rectum
    Foreign Body, Swallowing of
    Gas/Belching
    Gas/Flatulence
    Heartburn
    Hemorrhoids
    Hiccups
    Incontinence, Stool
    Indigestion
    Ostomy Problems
    Pinworms
    Rectal Bleeding
    Rectal Problems
    Stools, Abnormal
    Vomiting, Adult
    Vomiting, Child
  Genital/Obstetrics and Gynecological Problems
    Breast-Feeding Problems
    Breast Problems
    Contraception, Emergency (EC)
    Foreign Body, Vagina
    Genital Lesions
    Genital Problems, Male
    Menstrual Problems
    Postpartum Problems
    Pregnancy, Cold Symptoms
    Pregnancy, Fetal Movement Problems
    Pregnancy, Hypertension
    Pregnancy, Leaking Vaginal Fluid
    Pregnancy, Nausea and Vomiting
    Pregnancy Problems
    Pregnancy, Suspected Labor
    Pregnancy, Suspected Labor < 36 Weeks
    Pregnancy, Urination Problems
    Pregnancy, Vaginal Bleeding
    Scrotal Problems
    Sexual Assault
    Sexually Transmitted Disease (STD)
    Vaginal Bleeding
    Vaginal Discharge/Pain/Itching
  Urination Problems
    Bed-Wetting
    Incontinence, Urine
    Urinary Catheter/Nephrostomy Tube Problems
    Urination, Difficult
    Urination, Excessive
    Urination, Painful
    Urine, Abnormal Color
  Limb (Arm/Leg) Problems
    Ankle Injury
    Ankle Problems
    Arm or Hand Problems
    Bone, Joint, and Tissue Injury
    Cast/Splint Problems
    Extremity Injury
    Finger and Toe Problems
    Foot Problems
    Hand/Wrist Problems
    Hip Pain/Injury
    Joint Pain/Swelling
    Knee Pain/Swelling/Injury
    Leg Pain/Swelling
    Muscle Cramps
    Shoulder Pain/Injury
  Skin Problems
    Abrasions
    Allergic Reaction
    Bedbug Exposure or Concerns
    Bee Stings
    Bites, Animal/Human
    Bites, Insect
    Bites, Marine Animal
    Bites, Snake
    Bites, Tick
    Bruising
    Burns, Chemical
    Burns, Electrical
    Burns, Thermal
    Diaper Rash
    Facial Problems
    Facial Skin Problems
    Foreign Body, Skin
    Frostbite
    Glands, Swollen or Tender
    Hair Loss
    Hives
    Itching
    Jaundice
    Laceration
    Lice
    Piercing/Pocketing Problems
    Puncture Wound
    Rash, Adult
    Rash, Child
    Scabies
    Shingles: Suspected or Exposure
    Skin Lesions: Lumps, Bumps, and Sores
    Sunburn
    Sweating, Excessive
    Swelling
    Tattoo Problems
    Wound Care: Sutures or Staples
    Wound Healing and Infection
  Chronic and Infectious Diseases
    Asthma
    Avian Influenza (“Bird Flu”) Exposure
    Blood/Body Fluid Exposure
    Chickenpox
    Communicable Diseases (Appendix M)
    Congestive Heart Failure
    Diabetes Problems
    Ebola: Known or Suspected Exposure
    Hepatitis
    HIV Exposure
    Hospice Problems
    Impetigo
    Influenza
    Lice
    Mumps
    Pertussis (Whooping Cough)
    Reye Syndrome, Suspected
    Roseola
    Rubella (German Measles)
    Rubeola (Measles)
    Scabies
    Severe Acute Respiratory Syndrome (SARS)
    Sexually Transmitted Disease (STD)
    Sexually Transmitted Disease (STD) (Appendix N)
    Sickle Cell Disease Problems
    Shingles: Suspected or Exposure
    Swine Flu (H1N1 Virus) Exposure
    West Nile Virus
  Behavioral Health Problems
    Alcohol Problems
    Anxiety
    Child Abuse
    Depression
    Domestic Abuse
    Overdose
    Substance Abuse, Use, or Exposure
    Suicide Attempt, Threat
  General Problems
    Cold Exposure Problems
    Dehydration
    Electric Injury
    Falls
    Fatigue
    Fever, Adult
    Fever, Child
    Food Allergy, Known or Suspected
    Heat Exposure Problems
    Immunization, Tetanus
    Immunization Reactions
    Postoperative Problems
    Weakness
  Pediatric-Specific Problems
    Abdominal Pain, Child
    Bed-Wetting
    Chickenpox
    Child Abuse
    Circumcision Care
    Croup
    Crying, Excessive, in Infants
    Diaper Rash
    Diarrhea, Child
    Fever, Child
    Newborn Problems
    Rash, Child
    Roseola
    Seizure, Febrile
    Sleep Apnea, Infant
    Spitting Up, Infant
    Teething
    Umbilical Cord Care
    Vomiting, Child
]
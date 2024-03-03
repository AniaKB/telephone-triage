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
    { 'Altered Mental Status (AMS)':
      {
        keyQuestions: 'Name, Age, Onset, Cause If Known, Medications, Prior History',
        otherProtocolstoConsider: 'Alcohol Problems (22); Breathing Problems (101); Chest Pain (118); Confusion (142); Dehydration (173); Diabetes Problems (180); Dizziness (192); Fainting (228); Fever, Adult (241), Child (244); Headache (303); Heart Rate Problems (317); Seizure (530), Seizure Febrile (533); Substance Abuse, Use, or Exposure (581); Urination, Difficult (622).',
        nurseAlert: 'Signs of altered mental status may include: confusion; irritability; less responsive to voice or touch; drowsiness; combative; uncooperative; nonsensical verbalizing; sudden change in behavior, thinking process, or ability to communicate; auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations. • AMS may be one of the first indicators of a UTI, dehydration, or a stroke in the elderly. • In a child, AMS may be one of the first indicators of rapidly progressing meningitis or a head injury after trauma.',
        assessment: [
          { A: 'Is the following present?',
            list: ['Unconsciousness, not breathing'],
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
        }
      }
    ],
    { 'Confusion': [] },
    { 'Dizziness': [] },
    { 'Facial Problems': [] },
    { 'Fainting': [] },
    { 'Headache': [] },
    { 'Headache: Causes and Characteristics (Appendix T)': [] },
    { 'Head Injury': [] },
    { 'Insomnia': [] },
    { 'Neurologic Symptoms': [] },
    { 'Numbness and Tingling': [] },
    { 'Seizure': [] },
    { 'Seizure, Febrile': [] },
    { 'Sinus Problems': [] },
    { 'Speaking Difficulty': [] }
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
/*const [
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
]*/

const bodySystem = {
  'Neurologic & Head Problems': {
    'Altered Mental Status (AMS)': {
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
      seekEmergencyCare: [ 'Loss of consciousness > 1 time during the day', 'Difficulty breathing', 'AMS and any of the following:', 'severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body', 'persistent AMS', 'drowsiness and difficulty in arousing', 'headache, fever, or stiff and painful neck' ]
    },
    'Confusion': {
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
      seekEmergencyCare: ['Severe headache or stiff neck or rigidity', 'Sudden weakness on one side of body', 'Difficulty speaking', 'Pale, diaphoretic, and light-headed or weak', 'Hallucination, paranoia, or suicidal threat or attempt', 'Ill child and sudden change in behavior', 'Severe vomiting', 'Fruity breath', 'Flushing or dry skin' ]
    },
    'Dizziness': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History', 'Medications' ],
      otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Chest Pain (118)', 'Confusion (142)', 'Dehydration (173)', 'Earache and Drainage (200)', 'Fainting (228)', 'Falls (231)', 'Headache (303)', 'Heart Rate Problems (317)', 'Heat-Exposure Problems (320)', 'Hypertension (347)', 'Hyperventilation (350)', 'Neurologic Symptoms (420)', 'Rectal Bleeding (510)', 'Substance Abuse, Use, and Exposure (581)', 'Weakness (645)' ],
      nurseAlert: 'Dizziness can be a minor symptom caused by inadequate fluid or food intake, heat or sun exposure, or standing up too quickly. It may also be an indication of a serious condition related to an infectious process, cardiovascular, respiratory, gastrointestinal, or neurologic disorder. Dizziness may be described as light-headedness, feeling faint, fuzzy, woozy, or a sensation of motion by the person or the environment such as spinning or whirling.',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Is chest pain present?',
          list: [ '' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          B: 'In addition to the dizziness, are any of the following present?',
          list: [ 'Sudden onset of weakness or numbness in the face, arms, or legs on one side of the body', 'Difficulty speaking or walking, confusion, facial droop', 'Fainting spells or loss of consciousness', 'Heart rate < 50 or > 130 bpm or irregular heart rhythm', 'Persistent severe headache or change in vision', 'Fever, pale skin, and weakness' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'History of recent trauma or blow to the head < 48 hours ago', 'Recent history of severe vomiting, diarrhea, or bleeding and dizziness and pulse increase when sitting or standing', 'History of diabetes ' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Earache, ringing in the ears, or loss of hearing', 'Fever unresponsive to fever-reducing measures', 'Persistent light-headedness > 3 days', 'Recent abrupt cessation of drugs (OTC or prescription), alcohol, or caffeine' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Dizziness interferes with activities', 'History of dieting, and dizziness does not improve after eating', 'Dizziness occurs after taking a new medication', 'Increase in stress', 'Dizziness occurs during or after drinking alcohol', 'Dizziness occurs when moving the head' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'During the dizzy spell, reach out and touch something, then lie flat or sit with head down on your lap and take deep breaths for a few minutes.', 'If dizziness is accompanied by anxiety, rapid breathing, and numbness in the face or fingers, breathe into a paper bag for 5 to 10 minutes, making sure the mouth and nose are covered by the bag.', 'Sit up or stand up slowly. Avoid sudden changes in posture.', 'If diagnosed with labyrinthitis, consider having someone else provide transportation. Dizziness can take up to 4 weeks to resolve after starting treatment.', 'In the case of persistent dizziness, avoid noisy environments.', 'Limit intake of caffeinated beverages and alcohol.', 'If dehydrated, drink plenty of water or sports drinks.', 'Use a night light.', 'Consider OTC motion sickness medications (Benadryl, Bonine) if dizziness is related to motion, and follow the instructions on the label.', 'If dizziness caused by Ménière disease, reinforce the importance of restricting salt intake.', 'When feeling a “dizzy attack” coming on, stop moving for a few minutes. Reach out and lightly touch something solid and firm, then sit down and stay still.' ],
      reportToPCP: [ 'Problem persists > 1 week or worsens', 'Persistent vomiting and dizziness' ],
      seekEmergencyCare: [ 'Chest pain', 'Decrease in level of consciousness', 'Weakness or difficulty speaking', 'Heart rate < 50 or > 130 bpm or irregular heart rhythm' ]
    },
    'Facial Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Congestion (145)',  'Facial Skin Problems (225)',  'Mouth Problems (410)',  'Numbness and Tingling (433)',  'Piercing Problems (446)',  'Rash, Adult (501), Child (505)',  'Sinus Problems (556)',  'Shingles: Suspected or Exposure (545)',  'Skin Lesions: Lumps, Bumps, and Sores (559)',  'Tattoo Problems (602)',  'Toothache (611).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'History of glaucoma', 'Sudden onset of facial drooping on one side' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Sudden severe pain interferes with activity', 'Facial paralysis', 'Pain, swelling, redness, warmth, drainage, or fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Increased pain in afternoon or when bending over', 'Green, brown, or yellow nasal discharge', 'Pain along ridge between nose and lower eyelid', 'Temperature > 101°F (38.3°C)', 'Persistent swelling', 'Facial rash, blisters, or lesions' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Recent red, blistered facial rash', 'Pain, swelling, or bruising after blow to the face', 'History of recent cold', 'Pain follows ingestion of ice-cold foods or fluids', 'Nose and eye drainage' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Alternate cold and warm compresses to forehead and cheeks 1 minute each for 10 minutes, 4 times a day. A sock filled with rice and heated in the microwave works well.', 'Increase fluid intake.', 'Apply ice pack to face injury for 10 to 20 minutes, 4 times a day for first 24 hours to help reduce swelling.', 'Sit in a steamy bathroom for 20 minutes several times a day to promote sinus drainage.', 'Take OTC decongestants as needed for congestion and follow instructions on the label. Ask your pharmacist for product suggestions.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort and fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ 'Persistent pain or condition worsens', 'Temperature > 101°F (38.3°C)', 'Signs of infection: pain, swelling, redness, warmth, drainage, or red streaks', 'Persistent nasal discharge', 'Change in vision, hearing, smell, or taste' ],
      seekEmergencyCare: [ 'Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'Sudden facial drooping on one side of the face' ]
    },
    'Fainting': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Additional Injuries', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', 'Confusion (142)', 'Diabetes Problems (180)', 'Dizziness (192)', 'Heart Rate Problems (317)', 'Heat-Exposure Problems (320)', 'Pregnancy Problems (481)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Is the person still unconscious or has slow, irregular, or noisy breathing?',
          list: [ '' ],
          true: 'Call ambulance'
        },
        {
          B: 'Is chest, jaw, neck, shoulder, or arm pain present?',
          list: [ '' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Loss of consciousness > 1-2 minutes', 'Loss of movement in arms or legs, confusion, difficulty speaking, numbness or tingling, or blurred vision', 'History of recent head injury', 'History of heart problems or diabetes', 'Irregular or rapid heartbeat', 'Severe headache', 'Severe back or abdominal pain', 'Recent bloody or black tarry stools', 'Shortness of breath' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Signs of dehydration: infrequent urination, dark yellow urine, sunken eyes, poor skin elasticity, excessive thirst, dry mouth or mucous membranes', 'Continued light-headedness or dizziness' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          E: ' Are any of the following present?',
          list: [ 'Person is older than 50 years and faintness occurs after turning head or looking up', 'Pregnancy or LMP > 6 weeks ago' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          F: 'In addition to light-headedness, are any of the following present?',
          list: [ 'Several hours of exposure to the sun or a hot', 'environment', 'Prolonged period of time since eating', 'Feeling faint after suddenly standing from a lying, sitting, or bending position', 'Recent onset of an emotional event', 'Feeling faint after strenuous exercise', 'Faintness after prolonged standing in one spot', 'New blood pressure medication', 'Faintness occurred after a period of rapid breathing and numbness in hands, toes, or face' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' For faintness, raise legs higher than the head or sit and lower head between the knees until sensation passes.', 'If there has been prolonged exposure to heat, sip cool fluids and apply cold compresses to cool the body.', 'Avoid sudden posture changes: slowly stand from a lying, sitting, or bending position.', 'If the person has diabetes, check blood sugar and take appropriate action. For low blood sugar, drink a glass of orange juice, cola, or milk.', 'Eat frequent small protein snacks. Eat a well-balanced, sensible, weight reduction diet if overweight.', 'Avoid prolonged standing in one position. Shift weight from foot to foot. Walk around if possible.' ],
      reportToPCP: [ 'Frequent episodes of light-headedness', 'New blood pressure medication and faintness persists', 'Condition persists or worsens', 'New-onset, bloody or black tarry stools', 'Possibility of pregnancy' ],
      seekEmergencyCare: [ 'Chest, jaw, neck, shoulder, or arm pain', 'Severe headache', 'Severe back or abdominal pain', 'Fainting recurs', 'Shortness of breath' ]
    },
    'Headache': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'History of Migraines or Known Aneurysms', 'Medications', 'Pain Scale', 'History. See Head Injury protocol if recent trauma or injury to the head' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', ' Congestion (145)', ' HeadInjury (307)', ' Hypertension (347)', ' Neck Pain (417)', ' NeurologicSymptoms (420)', ' Sinus Problems (556)', ' Toothache (611)', ' VisionProblems (635)' ],
      nurseAlert: 'There are many conditions that cause headaches; some can be potentially life-threatening. Error on the side of caution when triaging callers with a headache. Headache: Causes and Characteristics: Appendix T (698) is provided to help the nurse gain a better understanding of the many conditions causing headaches. It is NOT to be used to try and diagnose a caller\'s condition.',
      alertBullets: [ 'Be on the alert for signs of meningitis: headache, stiff neck, fever, petechial rash, vomiting, irritability, altered mental status.', 'Be on the alert for signs of a stroke: headache, weakness on one side of the body, facial drooping, difficulty talking or walking, vision changes.' ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ 'Sudden severe pain or “worst headache ever”', 'Sudden onset of weakness, unsteady gait, numbness, and/or tingling on one side of the body', 'Confusion, difficulty in arousing, acting differently', 'Sudden onset of difficulty speaking or slurred speech', 'Stiff neck and fever (pain bending head forward)', 'Blurred or double vision', 'Purple or blood-colored flat spots or dots on skin', 'Child with diabetes and blood glucose is high' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Persistent vomiting', 'History of high blood pressure and light-headedness', 'Fever > 103°F (39.4°C) and unresponsive to feverreducing measures', 'Eye pain with redness and decreased vision', 'Recent tick bite, headache, rash, and flulike symptoms', 'New onset of severe persistent pain', 'Change in ability to walk' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Persistent migraine unresponsive to usual migraine treatment', 'Migraine intensity or character different from past migraines', 'Persistent headache > 12 hours and no other symptoms', 'Pain interferes with activity', 'Pain in temporal areas and age > 50 years' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Congestion', 'Fever and sore throat', 'Muscles and joints ache', 'Recent stressful event', 'History of allergies', 'Dull and constant pain with tender and tight neck muscles', 'Recently stopped drinking coffee, eating chocolate, or smoking', 'Severe dieting and weight loss', 'Dental problems' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Apply cool compresses or ice pack to forehead every 2 hours.', 'Rest in a quiet darkened room.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Reduce fever with usual fever-reducing measures.', 'For known migraine:', 'take medication as directed by PCP', 'rest with head elevated', 'apply heat to back of neck', 'apply cool compresses to forehead', 'consider avoiding chocolate, milk products, cheddar and blue cheeses, cured pork, caffeine, monosodium glutamate (MSG), and red wine', 'If nasal congestion is present, breathe steam for 10 to 20 minutes, 4 times a day or use a vaporizer.', 'Keep a migraine journal and take it to next appointment. Try to identify triggers.' ],
      reportToPCP: [ 'Headache persists > 24 hours', 'No improvement or pain worsens', 'Fever is present', 'Thick green or yellow nasal discharge', 'High blood glucose if you have diabetes', 'Persistent vomiting' ],
      seekEmergencyCare: [ 'Sudden onset of weakness, numbness, or tingling on one side of the body', 'Fever, stiff neck', 'Confusion, severe drowsiness, or difficulty speaking', 'Purple or blood-colored flat spots or dots appear on skin', 'Change in ability to walk' ]
    },
    'Head Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Mechanism of Injury', 'Medications', 'Associated Symptoms', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Back/Neck Injury (56)', 'Confusion (142)', 'Falls (231)', 'Headache (303)', 'Vomiting, Adult (638), Child (641)' ],
      nurseAlert: '',
      alertBullets: [ 'A neck injury should always be considered whenever there is a head injury. Assess for weakness, incoordination, numbness, neck pain.', 'Altered mental status may be one of the first signs of a head injury after trauma particularly in a child or the elderly.' ],
      assessment: [
        {
          A: 'After a blow or injury to the head, are any of the following present?',
          list: [ 'Difficulty moving arms or legs, weakness, incoordination, or slurred speech', 'Severe neck pain' ],
          true: 'Call ambulance and do not attempt to move the person'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Abnormal breathing or difficulty in breathing', 'Altered mental status, difficulty in arousing, confusion, agitation', 'Uncontrolled bleeding', 'Seizure activity', 'Preverbal children do not recognize parents or caregiver', 'Persistent visual disturbance', 'Persistent vomiting', 'Persistent headache', 'Numbness or tingling in arm or leg' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Persistent blood or fluid draining from the nose or ears', 'Gaping, split, jagged, or deep wound', 'Laceration', 'Bruising behind the ears or under the eyes', 'Persistent bleeding > 10 minutes', 'History of loss of consciousness', 'Change in behavior since the injury', 'Fall > 2 feet in a child younger than 1 year', 'Presently or recently taking blood-thinning medication' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Child younger than 1 year with a soft spongy swollen area over the skull for > 12 hours' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: ' Are any of the following present?',
          list: [ ' Swollen area (goose egg) on the forehead or scalp', 'Intermittent headache not responsive to pain medication' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Apply ice packs or cold compresses to area for 20 minutes every 2 hours to reduce swelling and discomfort. Place a cloth barrier between the ice and the skin.', 'Allow a child to sleep after an injury. Awaken every 2 hours for 24 hours to determine level of alertness and responsiveness.', 'Avoid heavy activity during first 24 hours after the injury. Rest in a quiet area with head slightly elevated.', 'Take acetaminophen for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid aspirin and ibuprofen.', 'Avoid alcohol, sleeping pills, or sedatives during the first 24 hours after the injury.', 'Avoid heavy meals.' ],
      reportToPCP: [ 'No improvement or condition worsens', 'Persistent headache', 'Persistent swelling > 24 hours after ice pack application', 'Blood or clear drainage from nose or ears' ],
      seekEmergencyCare: [ 'Confusion, disorientation, agitation, or change in vision', 'Altered mental status or difficulty arousing', 'Numbness, tingling, or weakness in an arm or leg', 'Persistent vomiting, severe headache, speech problems, seizures, or lethargy', 'Child does not recognize parents or caregiver', 'Persistent numbness and tingling' ]
    },
    'Insomnia': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Alcohol Problems (22)', 'Anxiety (37)', 'Depression (177)', 'Heartburn (313)', 'Substance Abuse, Use, or Exposure (581)', 'Suicide Attempt, Threat (584).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: ' Is the following present?',
          list: [ 'Suicidal ideation' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent pain, itching, coughing, or fever that interferes with sleep and is unresponsive to home care measures', 'Persistent depression, anxiety, or stress' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Persistent difficulty sleeping > 7 days', 'Consistently unable to sleep > 2-3 hours', 'Requesting medication for sleep', 'Urinary or bowel problems that frequently interrupt sleep', 'Problem interferes with work, school, or other daily activity', 'Ingestion of caffeine products', 'Intermittent episodes lasting 3–5 days', 'Recent withdrawal from drugs or alcohol', 'Prescribed sleep medication ineffective', 'Taking a new medication', 'Ingestion of OTC products', 'Feeling overwhelmed' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Increase daily exercise. Avoid strenuous exercise 2 to 3 hours before bedtime. Do gentle stretching exercises for 10 minutes before retiring.', 'Read non-work-related materials or listen to soothing music at bedtime.', 'Avoid caffeine and other stimulants 11 hours before bedtime.', 'Take a warm bath or shower 2 hours before retiring.', 'Drink warm milk before bed.', 'Drink 8 ounces of orange juice before bedtime if alcoholic beverages have been consumed earlier; this helps to speed the breakdown of alcohol and reduces reawakening after a few hours of sleep.', 'Try relaxation techniques, such as deep breathing exercises or visualizing flower-filled meadows.', 'Identify stress factors and try to reduce them. If awakening prompts worry about things to be done, devise a plan of action, list the items, and try to go back to sleep.', 'Avoid eating 3 hours before bedtime. Sip 1 tbsp of apple cider vinegar diluted with water or juice 30 minutes after dinner to help speed gastric flow through the stomach and reduce gastric reflux.', 'If difficulty sleeping is due to gastric reflux, sleep lying on the left side as tolerated to help speed stomach emptying and prevent reflux into the esophagus.', 'If stress, anxiety, or depression interferes with sleep, seek help from a local counseling center or mental health services.', 'Consider taking Benadryl or melatonin on a short-term basis. Follow the instructions on the label.', 'If taking supplements, choose energizing supplements like B-complex vitamins in the morning and soothing minerals such as calcium and magnesium at night.', 'Plug in a red, blue, or green nightlight to avoid turning on bright lights to use the restroom at night.', 'Keep the bedroom dark, cool, and quiet. Use a fan or other appliance to block noise.', 'Wear loose-fitting nightclothes.', 'Call back immediately if feeling overwhelmed.' ],
      reportToPCP: [ 'No improvement with home care measures or problem worsens', 'Problem interferes with work, school, or other daily activity', 'Feeling overwhelmed' ],
      seekEmergencyCare: [ 'Suicidal ideation' ]
    },
    'Neurologic Symptoms': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Back/Neck Injury (56)', 'Confusion (142)', 'Dizziness (192)', 'Falls (231)', 'Headache (303)', 'Head Injury (307)', 'Numbness and Tingling (433)', 'Vision Problems (635)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ 'Sudden changes in vision, weakness, numbness, speech, or mental status may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.', 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: 'Did any of the following symptoms suddenly occur?',
          list: [ 'Numbness or weakness in face, arm, or leg on one side of the body', 'Unexplained dizziness or falls', 'Difficulty breathing', 'Altered mental status', 'Inability to stand, walk, or bear weight', 'Difficulty speaking', 'Facial drooping on one side', 'Difficulty swallowing', 'Unable to move a limb', 'Visual changes', 'Sudden, severe headache', 'Recent history of head trauma and elevated blood pressure' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Transient focal neurologic deficits that completely resolve within hours', 'New and sudden onset of bladder or bowel incontinence', 'New onset of back pain and numbness to groin or rectal area', 'Unable to urinate and bladder full', 'Headache worse than prior headaches', 'Low blood glucose and weakness, confusion, dizziness, headache, tremors, or vision problems, and unresponsive to usual home remedies' ],
          true: 'Seek medical care immediately'
        },
        {
          C: 'Is the following present?',
          list: [ 'Tremors and history of heavy alcohol use' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Poor attention span', 'Transient tingling in hands or feet', 'New onset of tremors and no history of diabetes, alcohol abuse, Parkinson disease, or seizures' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Provide reassurance that foot or hand tingling after prolonged sitting or pressure to the area will resolve with movement and stretching.', 'Avoid crossing legs at the knees or ankles.', 'Avoid smoking.', 'Take medications as prescribed.', 'Avoid driving or operating machinery when experiencing transient symptoms.', 'Take fall precautions. Remove safety hazards. Place bell or other communication device within reach of person to summon help before trying to get up.' ],
      reportToPCP: [ 'Weakness or numbness in the face, arms, or legs', 'Difficulty understanding', 'Persistent vision changes', 'Persistent dizziness', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ 'Weakness on one side of the body', 'Unexplained dizziness or falls', 'Difficulty breathing', 'Altered mental status', 'Inability to stand, walk, or bear weight', 'Difficulty speaking or swallowing', 'Facial drooping on one side', 'Unable to move a limb', 'Severe headache', 'Visual changes' ]
    },
    'Numbness and Tingling': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Location', 'Associated Symptoms', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Arm or Hand Problems (46)', 'Back/Neck Injury (56)', 'Back Pain (59)', 'Chest Pain (118)', 'Headache (303)', 'Head Injury (307)', 'Hyperventilation (350)', 'Neurologic Symptoms (420)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ 'Sudden changes in vision, weakness, numbness, speech, or mental status may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.', 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Confusion', 'Change in mental status' ],
          true: 'Go to Altered Mental Status protocol (29)'
        },
        {
          B: 'Is the following present?',
          list: [ 'Severe headache' ],
          true: 'Go to Headache protocol (303)'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'One side of the body affected', 'Sudden weakness in arms and/or legs', 'Difficulty speaking, slurred speech', 'Blurred vision', 'Loss of bladder or bowel control', 'Fingers or toes are cold or blue compared with other fingers or toes', 'Headache prior to onset of symptoms', 'Chest pain' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' History of recent heavy lifting or strenuous exercise', 'Area painful, swollen, and/or warm', 'Severe pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Numbness, tingling, and/or a sharp pain in the hand or arm at night', 'History of recent illness or surgery', 'Gradual onset', 'Stiff or painful neck and no known injury', 'Diagnosed carpal tunnel and worsening symptoms', 'Pregnant' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          F: 'Are any of the following present?',
          list: [ 'Symptoms followed prolonged sitting or lying in one position', 'Rapid breathing, dizziness, and hands, face, or lips affected' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid sitting in one position for long periods of time.', 'Periodically tighten and release muscles in affected area to stimulate circulation.', 'Protect numb area from injury.', 'To slow rapid breathing and control numbness and tingling, see next page.', 'Avoid repetitive motions; take breaks and do stretching exercises.', 'Apply heat or cold to stiff neck.', 'Sit down and focus on slowing breathing, one breath every 5 seconds.', 'Cover mouth and nose with a paper bag and breathe in and out 10 times.', 'If no improvement, continue breathing in the bag for 5 to 15 minutes.', 'Breathe without the bag for a few minutes.', 'Repeat breathing with and without the bag until condition improves.' ],
      reportToPCP: [ 'No improvement in 20 to 30 minutes or condition worsens', 'Symptoms interfere with daily activities' ],
      seekEmergencyCare: [ 'Change in mental status', 'Sudden weakness on one side of body', 'Difficulty speaking or slurred speech', 'Loss of bowel or bladder control', 'Chest pain', 'Vision changes', 'Fingers or toes are blue' ]
    },
    'Seizure': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History of Seizures', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Alcohol Problems (22)', 'Altered Mental Status (29)', 'Confusion (142)', 'Fever, Adult (241), Child (244)', 'Head Injury (307)', 'Seizure, Febrile (533)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Multiple seizures', 'Difficulty breathing', 'Seizure lasts > 5 minutes', 'Severe headache', 'Persistent unusual lethargy', 'History of recent head injury', 'History of recent drug ingestion', 'First-time seizure', 'Pregnancy' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Injury during seizure', 'History of habitual heavy alcohol or drug use and recently quit drinking or taking drugs', 'High fever', 'Frequent seizures while on seizure medication' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Stopped taking seizure medication', 'History of diabetes, cerebrovascular accident, cancer, or cardiovascular or neuromuscular disease' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Is the following present?',
          list: [ 'History of seizures and alert and oriented after waking up from the seizure' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Protect the Airway' = [ 'Lay the victim on side or stomach with the head turned toward the side to prevent choking on secretions or vomit.', 'If there is noisy breathing, pull the jaw and chin forward. Do not put your fingers, medication, or any other object in the seizing person\'s mouth.', 'Loosen tie or other restrictive clothing.' ],
        'Protect From Injury' = [ 'Move the seizing person to a safe area away from objects that could cause injury.', 'Protect the head from hitting a hard surface.', 'Do not try to hold the person and restrict movement. Allow the seizure to run its course.' ],
        'Postictal Phase' = [ 'Expect the person to sleep approximately 30 minutes after the seizure and slowly awaken.', 'Do not allow person to drive after a seizure.', 'Do not give anything by mouth until fully awake.' ],
        'Reduce High Fever After the Seizure' = [ 'Remove clothing and sponge with cool water.', 'Apply cool compresses to the forehead, face, and neck.', 'Give acetaminophen for fever. Use acetaminophen suppositories if person is still groggy. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ]
      ],
      reportToPCP: [ 'Repeated seizure activity', 'No improvement or condition worsens', 'Fever unresponsive to fever-reducing measures after a seizure' ],
      seekEmergencyCare: [ 'Difficulty breathing', 'Severe headache, stiff or painful neck', 'Persistent confusion' ]
    },
    'Seizure, Febrile': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History of Seizures', 'Temperature (if known)', 'Does Child Feel Hot', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', ' Confusion (142)', ' Fever, Adult (241), Child (244)', ' Head Injury (307)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Multiple seizures', 'Difficulty breathing or breathing stopped > 60 seconds', 'Seizure lasts > 5 minutes' ],
          true: 'Call ambulance and Begin rescue breathing if child is not breathing'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' First-time seizure', 'Child younger than 6 months or older than 5 years of age', 'Severe headache, stiff or painful neck' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Persistent temperature > 102°F (38.9°C) that is unresponsive to fever-reducing measures' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Alert and oriented after seizure', 'Child wants to sleep after seizure but can be aroused without irritability' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Protect the Airway' = [ 'Lay the victim on side or stomach with the head turned toward the side to prevent choking on secretions or vomit.', 'If there is any noisy breathing, pull the jaw and chin forward. Do not put your fingers, medication, or any other object in the seizing person’s mouth.', 'Loosen clothing.' ],
        'Protect From Injury' = [ 'Move the seizing person to a safe area away from objects that could cause injury.', 'Protect the head from hitting a hard surface.', 'Do not try to hold the person and restrict movement. Allow the seizure to run its course.' ],
        'Postictal Phase' = [ 'Expect drowsiness. Allow rest in a cool room. Lightly dress the victim in undergarments.', 'Do not give anything by mouth until fully awake.' ],
        'Reduce High Fever After the Seizure' = [ 'Remove clothing and sponge with cool water. Stop the bath if shivering occurs.', 'Apply cold compresses to the forehead, face, neck, and underarms.', 'Give acetaminophen for fever and follow instructions on the label. Use acetaminophen suppositories if drowsiness persists. Give every 4 hours if fever persists, even during the night, until fever < 100°F (37.8°C). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Do not bathe with alcohol rubs.' ],
      ],
      reportToPCP: [ 'Repeated seizure activity', 'No improvement or condition worsens', 'Fever unresponsive to fever-reducing measures' ],
      seekEmergencyCare: [ 'Difficulty breathing or breathing stops > 60 seconds', 'Seizure lasts > 5 minutes', 'Face, lips, or nails turn blue', 'Injury occurs during seizure', 'Persistent confusion', 'Severe headache, stiff or painful neck' ]
    },
    'Sinus Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'Prior Sinus', 'Problems', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Cough (163)', 'Earache, Drainage (200)', 'Facial Pain (222)', 'Fever, Adult (241), Child (244)', 'Headache (303)', 'Sore Throat (567)' ],
      nurseAlert: 'Use the protocol if history of sinus problems or under current treatment for a sinus condition.',
      alertBullets: [ '' ],
      assessment: [
        {
          B: 'Are any of the following present?',
          list: [ 'Redness and swelling in cheek, forehead, or eyelid', 'Vision change' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent fever and sinus congestion or facial pain > 2–3 days', 'Yellow or green nasal discharge > 3–5 days', 'Persistent dull ache or tenderness around eyes or cheekbones', 'No improvement after 48 hours of antibiotic therapy', 'Pain worsens when bending over' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Some sinus discomfort and clear nasal discharge', 'Recent cold', 'History of allergies', 'Postnasal drainage', 'Chronic cough' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Use a vaporizer or humidifier to keep air moist, especially at night, and change the water daily.', 'Breathe steam several times a day to help promote sinus drainage. Sit in a steam-filled bathroom for 10 to 20 minutes or cover head with a towel and breathe steam from a tea kettle or basin filled with hot water.', 'Apply hot packs to area around the eyes and cheekbones. Diabetics should use heat with caution.', 'Take OTC decongestant of choice, and follow instructions on the label. If hypertensive or pregnant, such medications may not be appropriate. Check label on container before taking such medications.', 'For nasal congestion, use saline nose drops or spray.', 'For postnasal drainage, may try phenylephrine (Neo-Synephrine) or oroxymetazoline nasal (Afrin) nose drops for as long as 3 days. Then discontinue use. Prolonged use may worsen congestion when use of spray is discontinued. Do not take if cardiac disease, hypertension, or prostate problems are present.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) as tolerated for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present.', 'Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid dairy products.', 'Drink at least six 8-ounce glasses of liquids a day, unless on fluidrestriction diet.' ],
      reportToPCP: [ 'Yellow or green nasal discharge for > 3 to 5 days', 'No improvement after 48 hours of antibiotic therapy', 'Redness and swelling in cheek, forehead, or eyelid', 'No improvement after 5 days or condition worsens' ],
      seekEmergencyCare: [ '' ]
    },
    'Speaking Difficulty': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Anxiety (37)', 'Asthma (49)', 'Breathing Problems (101)', 'Confusion (142)', 'Headache (303)', 'Mouth Problems (410)', 'Neurologic Symptoms (420)', 'Piercing Problems (446)', 'Sore Throat (567)', 'Tongue Problems (608)' ],
      nurseAlert: ': Sudden changes in vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.',
      alertBullets: [ 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: ' In addition to difficulty speaking, are any of the following present?',
          list: [ 'Weakness on one side of body', 'Difficulty breathing', 'Difficulty swallowing', 'Severe headache', 'Confusion/disorientation', 'New onset and history of blood clots or heart problems', 'Words or ideas are mixed up', 'Trauma to the neck' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Numbness or weakness', 'Frequent or intermittent episodes of difficulty speaking', 'Inability to move muscles on one side of face', 'History of recent injury or trauma', 'Dizziness or light-headedness', 'Blurred vision', 'New onset and unable to start sentences without repeating first word or unable to start a sentence when ready to speak' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Pain in mouth or face' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Under medical care for problem and condition is worsening', 'Increased stress level', 'Taking a new OTC or prescribed medication', 'Poor attention span', 'New onset of stuttering in child', 'Parent concerned' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Speak slowly while facing the person and give short, simple directions.', 'Do not rush the person; allow ample time for a response.', 'Use paper and pencil to communicate as necessary.', 'Person with a diagnosed speech problem may show frustration through swearing, yelling, or acting out. Be patient, positive, and nonjudgmental. Do not take the person’s actions personally.', 'Encourage and allow for as much independent behavior as possible.', 'Decrease the stress level through relaxation, exercise, or taking a break from stressors.' ],
      reportToPCP: [ 'Condition persists or worsens, and cause of the problem is unknown', 'Numbness or weakness', 'Dizziness or light-headedness', 'Blurred vision' ],
      seekEmergencyCare: [ ' Weakness on one side of the body', 'Difficulty breathing', 'Difficulty swallowing', 'Confusion or disorientation', 'Severe headache' ]
    },
  },
  Eyes: {
    'Contact Lens Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Type of Contact', 'Pain Scale', 'Medications' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Vision Problems (635)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ 'Sudden loss of vision', 'Severe pain', 'Penetrating injury (such as hard lens embedded in the surface of the eye)', 'Severe pain after insertion of lenses that were not properly cleaned and rinsed before insertion' ],
          true: 'Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Hard lens broken in eye', 'Persistent pain that is unresponsive to home care', 'Blurred or changed vision ' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Puslike drainage from eye', 'No improvement or condition worsens after home care treatment', 'Inability to remove contact lens', 'Persistent sensation of a foreign body in the eye', 'Severe sensitivity to light' ],
          true: 'Seek medical care within 12 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Discomfort', 'Eyes red or swollen and no change in vision', 'Scratchy sensation', 'Frequent tearing' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ '**Wash hands thoroughly before any eye care.', 'To remove hard contact lens:', 'Penlight or magnification is helpful.', 'Eyelid may need to be turned inside out.', 'Place several drops of saline in eye.', 'Move lens with gentle pressure through the eyelid.', 'To remove soft contact lens:', 'Place several drops of saline in the eye.', 'Gently move lens to white part of the eye.', 'Grasp lens with thumb and forefinger and remove.', 'Gently irrigate affected eye with saline or water for 10 to 20 minutes.', 'Rest eyes in a darkened room. Apply cold compresses or ice packs to eyes to reduce swelling.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen) to relieve discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Begin wearing lenses for limited periods of time 1 week after the problem is resolved or as directed by provider.', 'For eye drainage, apply warm compresses to eyes for 10 minutes several times a day. Use separate towels and wash cloths for other family members. Do not wear contact lenses when eye drainage is present. Wash hands frequently.', 'Avoid rubbing or scratching eyes.', 'Check contact lens for tears or irregularities.', 'Sterilize contact lenses thoroughly before reinserting them after infection resolves.' ],
      reportToPCP: [ 'Persistent redness or irritation to eyes', 'Puslike drainage or frequent tearing', 'Light sensitivity', 'No improvement or condition worsens', 'Inability to remove lens' ],
      seekEmergencyCare: [ 'Sudden loss of vision', 'Severe pain to one or both eyes' ]
    },
    'Eye Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Contact Lens Wearer', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Burns, Chemical (107)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Head Injury (307)', 'Piercing Problems (446)', 'Vision Problems (635)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Laceration or penetrating injury to the eye or eyelid', 'Blow to the eye and sudden loss of vision', 'Bulging eyeball', 'Clear jellylike discharge from injured eye', 'Blunt trauma to the eye', 'Pupils of unequal size', 'Blood in the colored part of the eye', 'Persistent severe pain', 'Exposure to acid such as battery acid or caustic substance (drain cleaner, lye)' ],
          true: 'Seek emergency care now and for chemical exposure, flush eye with cold running water and Follow Home Care Instructions'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Swelling, pain, and tearing > 30 minutes', 'Exposure to a strong light, such as a welder\'s arc or sun lamp', 'Injury caused by hot water, chemical, or foreign body and pain persists after home care treatment or white part of eye becomes cloudy', 'Persistent blurred or double vision' ],
          true: 'Seek medical care within 2 hours and for chemical exposure, flush eye with cold running water and Follow Home Care Instructions'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Discomfort or irritation persists 24 hours after the injury or removal of a foreign body', 'Signs of infection develop after an injury: pain, swelling, redness, drainage, or fever' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Area surrounding the eye is black and blue', 'Blood on white part of the eye for > 3 days' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Chemicals in the eye: Immediately flush eye with cold running water for 20 to 30 minutes. Tilt head under running water with injured eye down. While holding eyelids apart, allow water to run across the inner eye to the outer part of the eye.', 'Do not rub eye.', 'Apply ice pack or cool compresses to reduce swelling for the first 24 hours.', 'Take acetaminophen for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ ' Increased pain, swelling, drainage, or fever', 'Changes in vision', 'No improvement in pain after 48 hours', 'Bruising around the eye or bleeding persists > 2 weeks', 'White part of eye becomes cloudy' ],
      seekEmergencyCare: [ ' Any bleeding or jellylike discharge from the eye', 'Sudden change in vision', 'Persistent severe pain' ]
    },
    'Eye Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Neurologic Symptoms (420)', 'Stye (579)', 'Vision Problem (635). If injury or foreign body, see Eye Injury (216) or Foreign Body, Eye (261)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Sudden or severe pain', 'Sudden vision loss or blurred or double vision', 'Sudden onset of pupils of unequal size', 'Curtain over field of vision', 'Sudden increase in floaters', 'Flashes of light', 'Halos or rainbows around light', 'Blood in the colored part of the eye', 'Redness and unable to open eye or keep it open', 'Fever, light sensitivity, bilateral swelling, and redness' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Pain, redness, watering, eye drainage, and wears contact lenses', 'Pain increases with pressure to the eye or eye movement', 'Lesion on the eyeball or corner of the eye', 'Eye swollen shut' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain unresponsive to home care measures', 'Persistent itching, redness, burning, and drainage', 'Persistent pain after removing contact lenses and irrigating eyes', 'Swollen neck, lymph nodes, and redness around the entire eye', 'Stye returns or bleeds', 'Stye located on bottom eyelid near the nose is unresponsive to home care', 'Eye pain or drainage and fever > 100.5°F', 'Excessive persistent tearing of eye' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Blood in the white part of the eye > 3 days', 'History of eye pain late in the day', 'History of wearing contact lenses too long or improper cleaning', 'Tear duct area swollen and painful', 'Small red, swollen, tender area on upper or lower lid', 'Exposure to smoke, fumes, smog, pool water, known allergens, or sun lamp', 'Eyes dry and itching', 'Eyes crusted closed in the morning' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If drainage is present, encourage family members to use separate towels and washcloths. Eye infections are highly contagious.', 'Avoid rubbing or touching eyes.', 'Clean crusting or discharge with cotton ball moistened in warm water. Discard cotton ball after use. Do not use same cotton ball for both eyes. Wash your hands after cleaning.', 'Apply warm compresses to eyes for 15 to 20 minutes, 4 times a day.', 'Wash hands frequently.', 'Instill saline drops in dry itchy eyes.', 'Avoid wearing contact lenses for several days until the problem is resolved.', 'For styes: See Home Care Instructions in Stye protocol (579).' ],
      reportToPCP: [ ' Condition persists or worsens after 48 hours', 'Yellow or green discharge', 'Fever', 'Sores', 'Red and swollen eyelids' ],
      seekEmergencyCare: [ 'Severe pain', 'Sudden loss of vision or blurred or double vision', 'Sudden onset of unequal pupil size', 'Blood in colored part of the eye', 'Redness and unable to open eye or keep it open', 'Fever, light sensitivity, bilateral swelling, and redness' ]
    },
    'Foreign Body, Eye': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Vision Problems (635)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Object is embedded in the eyeball', 'Severe pain after irrigating chemical substance from eye', 'Sudden change in vision', 'Bulging eyeball', 'Blood in the colored part of the eye', 'Clear jelly-like discharge from injured eye', 'Severe pain after foreign body removed', 'Unequal pupil size' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Foreign object is over the colored part of the eye', 'Swelling, pain, or tearing > 30 minutes', 'Injury caused by hot water, chemical, or foreign body, and pain persists after home care treatment', 'Unable to remove free-floating foreign body' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Discomfort or irritation persists 24 hours after the injury or removal of a foreign body', 'Signs of infection develop after an injury: pain, swelling, redness, drainage, or fever', 'Unable to remove contact lens' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ '**  Chemicals in the Eye: Immediately flush eye with cold running water for 20 to 30 minutes. Tilt head under running water with the injured eye down. While holding eyelids apart, allow water to run across the inner eye to the outer part of the eye.', 'Do not try to remove', 'foreign body embedded in the eye', 'metal chip', 'foreign body over the colored part of the eye', 'Foreign Body Removal (lint, specks of dirt, eyelashes):', 'Pull down the lower lid and remove the particle with the corner of a moistened handkerchief, tissue, or cotton-tipped swab.', 'Pull down the upper lid over the lower lid and hold in place for a moment. Release and look to see if object is visible; if so, remove it.', 'Do not rub eye.', 'Apply ice pack or cool compresses to reduce discomfort.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ ' Increased pain, swelling, drainage, or fever', 'Changes in vision', 'No improvement in pain after 48 hours', 'Unable to remove free-floating foreign body' ],
      seekEmergencyCare: [ null ]
    },
    'Pinkeye': {
      keyQuestions: [ ' Name', 'Age', 'Onset', 'Cause', 'Eye Appears Pink or Red', 'History', 'Medications', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Contact Lens Problem (155)', 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Vision Problems (635)' ],
      nurseAlert: 'Use this protocol if previously diagnosed with pinkeye, known or suspected exposure to someone with pinkeye, and eye appears pink or red. Pinkeye is highly contagious.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Injury to the eye', 'Foreign body in the eye' ],
          true: 'Go to Eye Injury protocol (216) or Foreign Body, Eye protocol (261)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'History of glaucoma', 'Abdominal pain or nausea', 'Unable to move eye', 'Partial loss of field of vision' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Red swollen eyelids', 'Ulcer or gray-white sore on eyeball', 'Severe pain', 'Flashes of light', 'Age younger than 5 years and severe redness or swelling around eye' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Persistent blinking, tearing with pain', 'Yellow/green eye discharge', 'Eyelids slightly puffy with red rims', 'Blurred vision', 'Sensitivity to light', 'History of previous eye infections', 'Eyelids stuck together upon awakening', 'Redness > 7 days', 'Exposure to welders or ultraviolet light', 'Earache on same side as pinkeye' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ ' Blood in the white part of the eye with no change in vision', 'Cold symptoms: congestion, earache, sore throat, or cough', 'Exposure to environmental irritants: smog, smoke, pool water, shampoo, onions, household cleaning products, or jalapeño peppers', 'History of hay fever or allergies, and eye itching', 'Clear eye discharge' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rinse eyes frequently with warm water, every 1 to 2 hours when awake. Use a soft warm moist cloth to remove crusting and drainage.', 'If exposed to chemical irritants, rinse eyes with warm water for 5 minutes.', 'Apply alternating warm and cold compresses to eyes for 10 minutes every 2 hours for 24 hours.', 'Do not share towels or linens with other household members.', 'To control itching, try Benadryl for 24 to 48 hours. Follow instructions on the label.', 'Encourage children to avoid touching eyes and to wash hands frequently.' ],
      reportToPCP: [ 'Red swollen eyelids', 'Ulcer or gray-white sore on eyeball', 'Severe pain', 'Flashes of light', 'Persistent blinking, tearing, or pain', 'Persistent eye drainage' ],
      seekEmergencyCare: [ ' Unable to move eye', 'Abdominal pain or nausea' ]
    },
    'Vision Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Neurologic Symptoms (420)' ],
      nurseAlert: null,
      alertBullets: [ 'If eye injury or foreign body to the eye, use Eye Injury (216) or Foreign Body, Eye (261) protocols.', 'Sudden changes in vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Sudden onset of severe eye pain', 'Sudden loss of partial or total vision in one or both eyes', 'Blood or pus in colored part of eye', 'Pupils of unequal size', 'History of recent head injury and vision changes', 'Sudden or gradual increase in number of floaters, light flashes, or curtain over field of vision' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Sudden onset of blurred or double vision and eye pain', 'Pain increases with pressure to the eye or eye movement', 'Age > 50 years and recent or present temporal pain/ache', 'Signs of an eye infection: pain, redness, swelling, drainage, or fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Increased sensitivity to light', 'History of flashing lights followed by a headache', 'New and sudden onset of flashing lights (has not', 'curred in the past) preceded by a headache', 'Persistent blurred or double vision', 'Change in vision after a change in medication' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Progressive blurred vision and older than 50 years', 'Intermittent episodes of blurred vision', 'Difficulty seeing distant objects', 'Difficulty reading', 'Eyes dry and itching' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If drainage is present and eye infection is suspected, encourage family members to use separate towels and washcloths.', 'Avoid rubbing or touching eyes. Wash hands frequently.', 'Clean crusting or discharge with a cotton ball moistened in warm water. Discard cotton ball after use. Do not use the same cotton ball for both eyes.', 'Instill saline drops in dry, itchy eyes.', 'Make an appointment to have eyes checked for difficulty seeing close or distant objects.' ],
      reportToPCP: [ 'Sudden changes in vision', 'Signs of infection', 'Condition persists or worsens' ],
      seekEmergencyCare: [ ' Sudden onset of severe eye pain', 'Sudden loss of partial or total vision in one or both eyes', 'Pupils of unequal size', 'Sudden or gradual increase in number of floaters, light flashes, or curtain over field of vision' ]
    },
  },
  Ears: {
    'Earache, Drainage': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Common Cold Symptoms (138)', 'Crying, Excessive, in Infants (169)', 'Ear Injury, Foreign Body (203)', 'Fever, Adult (241), Child (244)', 'Hearing Loss (310)', 'Piercing Problems (446)', 'Sore Throat (567).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Earache, stiff neck, and fever' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Swelling, pain, and redness on one side of the face', 'Traumatic blow to the ear followed by severe pain, loss of hearing, bruising behind the ear, bleeding in the ear canal, or significant swelling', 'Severe pain unresponsive to pain medication', 'History of diabetes or immunosuppression', 'Ear deviated outward', 'Tenderness of bone behind ear' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Sudden hearing loss and pain, ear drainage, or dizziness', 'Bloody or clear drainage (different from usual ear wax)', 'Swelling, pain, warmth, drainage, or fever', 'Increased pain when moving or touching the ear', 'Blisters or sores', 'Fever, congestion, or sore throat', 'Light-headedness' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Unable to remove wax plug with medication and pain or decreased hearing', 'Sunburned ears', 'Pain after exposure to cold', 'Muffled hearing but no pain', 'Pain after swimming or exposure to water', 'Itching', 'Sudden pain with cracking or popping noise, decreased hearing and congestion', 'Ringing in the ears', 'Taking antibiotics for ear infection > 3 days and earache persists' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Do not instill liquid drops in the ear if pain is related to an injury or a ruptured eardrum is suspected (sudden pain, hearing loss, bleeding or discharge, ringing in the ears, dizziness).', 'Apply cool compresses to sunburned ears or ice packs to swollen area caused by a blow to the ear.', 'To remove excessive ear wax, use Debrox (carbamide peroxide) as directed for as long as 3 days, or use two drops of mineral oil in the affected ear twice a day for 2 days.', 'Apply warm compresses for ear pain for 15 to 20 minutes, 4 times a day, until resolved or while waiting for appointment. Fill a sock half full of rice. Knot the end. Microwave the sock until warm and apply against the ear. Check temperature against inner wrist before applying to the ear.', 'Avoid swimming until ear pain and drainage subside.', 'Swimmer\'s ear prevention: Mix equal parts of white vinegar and rubbing alcohol. Instill five drops of the mixture in each ear before and after swimming.', 'Relieve ear congestion by frequent swallowing, chewing gum, and swallowing with the nose pinched closed.', 'Avoid air travel when an earache or congestion is present. If travel is unavoidable, take a decongestant before flying, and chew gum during takeoff and landing.', 'Take acetaminophen for earache or fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'No improvement in 3 days or condition worsens', 'Persistent fever unresponsive to fever-reducing measures', 'Vomiting, diarrhea, fatigue, lethargy, or stiff neck', 'Fever or swelling' ],
      seekEmergencyCare: [ 'Earache, stiff neck, fever' ]
    },
    'Ear Injury, Foreign Body': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Earache, Drainage (200)', 'Head Injury (307)', 'Hearing Loss (310)', 'Piercing Problems (446)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'After an injury to the ear, are any of the following present?',
          list: [ 'Loss of coordination', 'Facial paralysis or drooping', 'Whirling vertigo' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Hearing loss', 'Ear canal bleeding', 'Dizziness', 'Recent blow to head and clear or bloody ear canal drainage', 'Unable to remove foreign body or embedded piercing', 'Severe pain', 'Persistent ringing in ear', 'Lacerated earlobe', 'Insect in ear canal', 'Severe swelling of ear lobe', 'Persistent bleeding > 30 minutes' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain > 48 hours', 'Earache after a blast of air, noise, or a blow to the head', 'External ear red and swollen', 'Recent use of Q-tips', 'Minor laceration and tetanus immunization > 10 years', 'No improvement after 3 days of home care' ],
          true: [ 'Seek medical care within 24 hours', 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions' ]
        },
      ],
      homeCareInstructions: [ ' Apply ice pack to ear for 20 minutes, 4 times a day, for the first 24 to 48 hours after injury.', 'Point the ear toward the light and pull up on the ear to encourage an insect to crawl out of the ear toward the light.', 'Do not try to remove foreign object if unable to remove by pointing ear down toward the ground and gently shaking the head while pulling up on the ear.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Watch for signs of infection: increased pain, drainage, fever, redness, or warmth.' ],
      reportToPCP: [ 'Signs of infection: increased pain, drainage, fever, redness, or warmth', 'Persistent pain > 48 hours', 'Dizziness', 'Persistent ear canal drainage', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ ' Loss of coordination', 'Facial paralysis or drooping', 'Whirling vertigo' ]
    },
    'Ear Ringing': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Congestion (145)', 'Dizziness (192)', 'Earache, Drainage (200)', 'Ear Injury, Foreign Body (203)', 'Hearing Loss (310).' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Overdose or frequent ingestion of aspirin or aspirin products' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Foreign body in the ear', 'Severe ear pain unresponsive to home care measures' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Recent ingestion of aspirin or medications containing aspirin, quinine, or streptomycin', 'History of recent head injury or recent ear surgery', 'Dizziness or vertigo', 'Nausea or vomiting', 'Persistent ear pain', 'Ear drainage', 'Persistent hearing loss' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Upper respiratory infection', 'Congestion associated with allergies', 'Feeling of fullness in one or both ears', 'Excessive wax buildup', 'History of Ménière disease with similar symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Take decongestants to relieve ear congestion. Follow instructions on the label. Ask your pharmacist for product suggestions.', 'If taking medications containing aspirin, quinine, or streptomycin, stop taking and notify PCP.', 'Do not poke at wax or try to remove with fingers or cotton swabs. These measures worsen the problem.', 'Decrease use of salt, caffeine, and alcohol if history of Ménière disease is present.' ],
      reportToPCP: [ 'Significant hearing loss or dizziness', 'Ear pain or drainage', 'Persistent vomiting, increased ringing, headache' ],
      seekEmergencyCare: [ null ]
    },
  },
  Nose: {
    'Common Cold Symptoms': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Congestion': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Foreign Body, Nose': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Nosebleed': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Nose Injury': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
  },
  'Throat/Mouth': {
    'Bad Breath': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Diabetes Problems (180)', 'Gas/Belching (282)', 'Indigestion (370)', 'Mouth Problems (410)', 'Swallowing Difficulty (589)', 'Tongue Problems (608)', 'Toothache (611)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Breath smells fruity or ammonia-like', 'Foul odor accompanied by abdominal swelling and pain', 'Fever and sores in the mouth or throat', 'Severe pain in mouth or tongue' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent gum bleeding or swelling', 'Persistent cough with foul-smelling sputum', 'Loose, missing, or decayed teeth', 'Frequent use of cast iron cooking utensils or dishes', 'Recent ingestion of a large dose of vitamins or minerals', 'History of gastrointestinal or chronic lung disease', 'History of chronic allergies or sinus problems ' ],
          true: 'Call PCP or dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rinse mouth with antiseptic mouthwash, such as Listerine.', 'Brush teeth or dentures, gums, and tongue twice a day and floss regularly.', 'Remove and soak bridges and dentures daily.', 'Decrease dosage of vitamins and mineral supplements if they are believed to be the cause of bad breath.', 'Reduce use of cast iron cooking utensils (unless recommended by physician).', 'Reduce ingestion of garlic, onions, alcohol, or coffee.', 'See dentist regularly and as dental problems occur.' ],
      reportToPCP: [ ' Severe pain or fever', 'No improvement or condition worsens', 'Breath smells like fruit or ammonia' ],
      seekEmergencyCare: [ null ]
    },
    'Foreign Body, Swallowing of': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Object', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Piercing Problems (446)', 'Rectal Bleeding (510)', 'Rectal Problems (513)', 'Vomiting, Adult (638), Child (641)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Excessive saliva, drooling, or gagging', 'Difficulty swallowing', 'Coughing, choking, or breathing difficulties', 'Suicide attempt' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Pain or discomfort in throat or chest', 'Abdominal pain', 'Vomiting', 'Object was a battery or sharp object' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Metal object', 'Object size larger than a nickel' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Wood or plastic object', 'Dull glass object (piece of a jar or cup)', 'Object size smaller than a penny', 'Known substance swallowed but no symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If no symptoms, try a sip of fluid. If no difficulty, try swallowing bread or soft food.', 'A dull glass object, such as a piece of a jar, cup, or ring, should pass with stools without difficulty in 3 to 4 days.', 'Do not give laxatives. Increase fiber (fruit, vegetables, whole grains) in the diet to help stimulate natural elimination.', 'Check stools for swallowed object.' ],
      reportToPCP: [ ' Intermittent choking or gagging', 'Abdominal pain', 'No evidence of object in stools within 7 days', 'Vomiting', 'Chest pain', 'Fever' ],
      seekEmergencyCare: [ 'Drooling, gagging, choking, or difficulty breathing or swallowing' ]
    },
    'Jaw Pain': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Radiation', 'Associated Symptoms', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Heartburn (313)', 'Indigestion (370)', 'Mouth Problems (410)', 'Neck Pain (417)', 'Toothache (611)', 'Tooth Injury (614)' ],
      nurseAlert: 'There are many conditions that cause jaw pain; some can be potentially life-threatening. Error on the side of caution when triaging callers with jaw pain. Women with jaw, neck, or back pain, nausea, and/or shortness of breath may be experiencing a heart attack.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Chest pain', 'Difficulty breathing' ],
          true: 'Go to Chest Pain protocol (118) or Breathing Problems protocol (101)'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Intermittent jaw pain and history of hypertension, cardiovascular disease, high cholesterol, obesity, heavy smoker, or age > 30 years', 'New onset and pain radiates to neck, shoulders, or arms' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Severe pain', 'Recent trauma to the area', 'Teeth do not align as usual ' ],
          true: 'Seek medical or dental care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Jaw locks in certain positions', 'Signs of infection (increased pain, swelling, drainage, red streaks, or warmth)' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ ' Pain > 2 weeks', 'Headache, neck, and shoulder pain', 'Clicking, snapping, or popping sound with jaw movement', 'Difficulty opening mouth wide', 'Pain in jaw joint', 'Ear or eye pain', 'Intermittent swelling over the area' ],
          true: 'Call back or call PCP or dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid chewing gum or tough foods.', 'Alternate cold and hot packs to the jaw 6 times a day.', 'Avoid cradling the telephone receiver between the jaw and shoulder.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort and swelling, as tolerated. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Massage muscles around the jaw.' ],
      reportToPCP: [ ' Persistent pain unrelieved by home care measures', 'Condition worsens', 'Signs of infection: increased pain, swelling, drainage, red streaks, warmth, or fever' ],
      seekEmergencyCare: [ 'Chest pain', 'Difficulty breathing', 'New pain radiates to neck, shoulders, or arms' ]
    },
    'Mouth Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Bad Breath (62); Jaw Pain (389)', 'Piercing/Pocketing Problems (446)', 'Skin Lesions: Lumps, Bumps, and Sores (559)', 'Sore Throat (567)', 'Swallowing Difficulty (589)', 'Toothache (611)', 'Tooth Injury (614)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ ' Sudden swelling in back of throat or tongue', 'Jaw feels locked in place, inability to open mouth', 'Unable to swallow own saliva' ],
          true: 'Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ ' Penetrating injury to mouth with sharp object', 'Persistent bleeding', 'Severe pain', 'Gaping laceration to lip, tongue, or inside mouth', 'Pain with facial swelling', 'Sensation of bone or food stuck in throat' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Fever and mouth sores', 'Blisters', 'White patches on tongue, gums, or inner cheeks', 'General ill feeling', 'Pain with biting, chewing, or opening mouth', 'Persistent mouth pain unresponsive to home care measures', 'History of phenytoin (Dilantin) use', 'Long history of smoking or use of chewing tobacco', 'Foul odor despite regular hygiene', 'Red, swollen, tender gums with fever', 'Difficulty swallowing' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ ' History of oral herpes, canker sores, recent viral illness, or new medication', 'Taking large doses of vitamins', 'Red, swollen, tender gums and no fever', 'Sore spot on tongue', 'Poor eating habits or change in diet', 'Recent increase in stress', 'Dental caries' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Iced fluids may soothe mouth sores but will worsen a toothache.', 'Rinse mouth with warm water and ½ tsp salt or baking soda 4 times a day, or rinse with an antiseptic mouthwash.', 'Avoid spicy, citrus, or salty foods until sores are healed.', 'Avoid touching sores.', 'Brush, floss, and rinse teeth and mouth at least twice daily.', 'Take usual pain medication (acetaminophen or ibuprofen) for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Use OTC product containing Orabase to provide protective coating and diminish discomfort.' ],
      reportToPCP: [ ' Mouth lesion persists > 2 weeks', 'Persistent pain or bleeding', 'Signs of infection: pain, swelling, drainage, warmth, or fever', 'Difficulty swallowing', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ ' Sudden swelling in back of throat or tongue', 'Jaw feels locked in place, inability to open mouth', 'Unable to swallow own saliva' ]
    },
    'Sore Throat': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Pain Scale', 'Associated Symptoms' ],
      otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Congestion (145)', 'Cough (163)', 'Earache, Drainage (200)', 'Fever, Adult (241), Child (244)', 'Hoarseness (341)', 'Mouth Problems (410)', 'Pregnancy, Cold Symptoms (466)', 'Swallowing Difficulty (589)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Difficulty breathing (for reasons other than nasal congestion)', 'Excessive drooling by a small child', 'Stridor', 'Inability to swallow own saliva', 'Inability to open mouth fully' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Significant difficulty swallowing because of pain', 'Temperature > 104°F (40°C)', 'Temperature > 101°F (38.3°C) in the elderly or immunosuppressed', 'Signs of dehydration' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' History of rheumatic fever, mitral valve prolapse, or other heart valve problem', 'Skin rash', 'Close contact with someone with strep throat within the past 2 weeks', 'Yellow pus or white mucus at back of throat', 'Red or enlarged tonsils', 'Persistent sore throat > 3 days', 'Ear pain', 'Fever or chills unresponsive to fever-reducing measures', 'Diabetes, elderly, or immunosuppressed', 'Dizziness/faintness', 'Foul-smelling breath' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Nasal congestion', 'Cough or sneezing', 'Feeling of fullness in ear' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take your usual pain medication (acetaminophen, aspirin, ibuprofen) for headache or fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Gargle with salt water several times a day for throat discomfort (¼ tsp regular salt to ½ cup warm water) or sip warm chicken broth. Use frozen cough drops or hard candy for additional relief if age > 4 years.', 'Increase fluids; try warm tea with lemon and honey, apple juice, gelatin, or sucking on flavored ice. Take frequent small sips if it is painful to swallow.', 'If you smoke, decrease or stop smoking.', 'Use a vaporizer or humidifier to keep the air moist, especially at night, or put a pot of water near the heat source.', 'Take decongestants to help relieve congestion, unless there is a history of hypertension or pregnancy. Discuss with PCP or pharmacist. ' ],
      reportToPCP: [ ' Fever > 101°F (38.3°C) for several days', 'Sore throat persists > 3 days or worsens', 'Earache', 'No improvement or condition worsens', 'Drooling', 'Signs of dehydration' ],
      seekEmergencyCare: [ ' Unable to swallow own saliva', 'Difficulty breathing/stridor', 'Chest pain', 'Excessive drooling', 'Unable to open mouth fully' ]
    },
    'Swallowing Difficulty': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Foreign Body, Swallowing of (274)', ' Heartburn (313)', ' Neurologic Symptoms (420)', ' Piercing Problems (446)', ' Sore Throat (567)', ' Weakness (645)' ],
      nurseAlert: 'Sudden changes in ability to swallow, vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Weakness of neck, chest, and limbs', 'Double or blurred vision, drooling, or drooping eyelids', 'Excessive drooling in small child who appears ill', 'Sudden swelling in face, tongue, or throat or itching, hives, or wheezing', 'Difficulty breathing', 'Pain in jaw, throat, neck, shoulders, chest, or arms', 'Inability to swallow own saliva' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Is the following present?',
          list: [ 'Sensation that bone or food is stuck in throat or esophagus' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Is the following present?',
          list: [ 'Unexplained weight loss' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Difficulty swallowing because of sore throat', 'Intermittent chest pain on bending forward or lying down', 'Throat feels tight after swallowing', 'Recent increase in stress' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) as tolerated for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Gargle with salt water several times a day for throat discomfort. Suck on hard candy or lozenges.', 'Increase fluids. Sip warm tea with lemon and honey.', 'Swallow bread or soft foods, as tolerated.', 'Try OTC antacids, such as Gelusil, Maalox, Mylanta, Riopan, and Tums, and follow instructions on the label.', 'Do not lie down, bend over, or exercise soon after eating.', 'Eat small, frequent meals.', 'Avoid spicy foods, alcohol, coffee, smoking, chocolate, vinegar, fatty foods, and carbonated beverages.' ],
      reportToPCP: [ ' No improvement after 3 days or condition worsens', 'Burping or vomiting blood or dark coffee-grounds-like emesis', 'Excessive drooling', 'Persistent fever unresponsive to home care measures' ],
      seekEmergencyCare: [ ' Weakness of neck, chest, and limbs', 'Double or blurred vision, drooling, or drooping eyelids', 'Excessive drooling in small child who appears ill', 'Sudden swelling in face, tongue, or throat or itching, hives, or wheezing', 'Difficulty breathing', 'Pain in jaw, throat, neck, shoulders, chest, or arms', 'Inability to swallow own saliva' ]
    },
    'Tongue Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Mouth Problems (410)', 'Piercing Problems (446)', 'Sore Throat (567)', 'Swallowing Difficulty (589)', 'Toothache (611)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Sudden onset of tongue swelling and difficulty breathing' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Is the following present?',
          list: [ 'Sudden onset of tongue swelling and no difficulty breathing', 'Pain, swelling, drainage around piercing', 'Gaping laceration from torn piercing' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Pain after taking a new medication', 'Pain on one side of face', 'Persistent hard lump on tongue or mouth', 'Persistent pain and diarrhea with loose, foul-smelling, bulky stools', 'Ulcers, cracks, redness, and persistent pain unresponsive to > 3 days of home care measures', 'Minor tear from piercing and last tetanus shot > 10 years' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Tongue bright red and swollen', 'Red tip and edges', 'Tongue appears hairy', 'Ulcers', 'Sore on one area of tongue', 'Tongue appears black from Pepto-Bismol', 'Irritation from dentures, rough tooth, or braces' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Drink through a straw to minimize discomfort.', 'Note relationship between certain foods and tongue pain and avoid those foods in the diet. Alcohol, hot food or spices, tobacco, chocolate, citrus foods, vinegar, pickles, salted nuts, and chips may irritate the tongue. Milk, gelatin, yogurt, ice cream, and custard are soothing to the tongue.', 'Rinse mouth 4 times a day with a salt or baking soda solution. Add ½ tsp salt or baking soda to 8 ounces of water.', 'If irritation is caused by a rough tooth or braces, contact your dentist.', 'If swelling is related to medication, discontinue use and contact PCP if it is a prescription medication.', 'Increase fluid intake.', 'If irritation is caused by dentures, remove dentures and contact dentist.' ],
      reportToPCP: [ ' No improvement or condition worsens after 3 days of home care measures', 'Pain becomes intolerable', 'Fever, rash, facial swelling' ],
      seekEmergencyCare: [ ' Difficulty breathing', 'Swelling of the back of the mouth' ]
    },
    'Toothache': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'If injury occurred, see Tooth Injury protocol (614)' ],
      otherProtocolstoConsider: [ 'Chest Pain (118)', 'Facial Pain (222)', 'Jaw Pain (389)', 'Mouth Problems (410)', 'Tooth Injury (614)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Gnawing pain in lower teeth and neck, chest, shoulder, or arm' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'History of cardiovascular disease or diabetes and jaw pain (no known injury or dental problem)', 'Temperature > 100.4°F (38.0°C) ' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Persistent pain and swelling over upper or lower jaw', 'Drainage from dental abscess', 'Broken tooth (nontraumatic) ' ],
          true: 'Seek dental care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Pain interferes with daily activities', 'Red, swollen, bleeding gums', 'Pain when biting food for several days', 'Recent filling and pain for several days', 'History of problems with same tooth (previous break or crack, hot or cold sensitivity)', 'Pain without trauma, fracture, fever, or facial swelling', 'Sores in mouth', 'Tooth loose, chipped, or decayed', 'Pain during or just after eating' ],
          true: 'Call back or call dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Apply ice pack for 20 minutes, 4 times a day, to reduce swelling.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rinse mouth with ½ tsp baking soda or salt in a cup of warm water several times a day if sores are present.', 'Brush teeth at least twice a day.', 'Call a dentist for an appointment.' ],
      reportToPCP: [ 'Persistent pain unresponsive to pain medication', 'Facial swelling', 'Fever', 'Drainage from dental abscess' ],
      seekEmergencyCare: [ 'Pain in chest, shoulder, or arms', 'Gnawing pain in lower teeth and neck' ]
    },
    'Tooth Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Back/Neck Injury (56)', 'Jaw Pain (389)', 'Mouth Problems (410)', 'Toothache (611)' ],
      nurseAlert: 'If the tooth has been knocked out, timing is critical since the success rate of reimplantation decreases significantly after 60 minutes. See home care instructions (616) for specific directions to help save the tooth.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Altered mental status', 'Severe neck pain', 'Numbness or tingling in arms or legs ' ],
          true: 'Call ambulance'
        },
        {
          B: 'Is the following present?',
          list: [ 'Tooth (or teeth) knocked out', 'Tooth or teeth loose and about to fall out', 'Tooth repositioned', 'Unable to stop bleeding with pressure' ],
          true: 'Seek dental or emergency care now and follow home care instructions'
        },
        {
          C: 'After a traumatic injury to teeth, are any of the following present?',
          list: [ 'Severe pain and swelling over affected area', 'Loose tooth or teeth', 'Tooth fractured through crown or to gum line', 'Painful cracked or chipped tooth', 'Frenum tear or laceration', 'Severe jaw pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Lacerated gum, cheek, or lip', 'Painless cracked or chipped tooth' ],
          true: 'Call back or call dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Find tooth, rinse gently with saliva, milk, or nonchlorinated bottle water and replace in socket as quickly as possible. Do not remove material adhered to tooth. Do not scrub tooth. Bite down on gauze pad or other material to help keep tooth in place.', 'If unable to replace tooth in socket, place tooth in a cup with ¼ tsp salt and 1 cup of milk. May place tooth under tongue if victim is alert and not a young child. Patient must be able to comprehend why it is important to keep tooth segment under the tongue so that there is no chance of swallowing tooth.', 'Bite down on a folded gauze dressing to control bleeding.', 'Call dentist.', 'Take your usual pain medication (acetaminophen, ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Apply ice to injured gum as tolerated to help control pain.' ],
      reportToPCP: [ 'Persistent bleeding, swelling, or pain' ],
      seekEmergencyCare: [ null ]
    },
  },
  'Back/Neck Problems': {
      'Back/Neck Injury': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Mechanism of Injury', 'Medications', 'Pain Scale', 'History' ],
        otherProtocolstoConsider: [ 'Back Pain (59)', 'Breathing Problems (101)', 'Headache (303)', 'Incontinence, Stool (365), Urine (368)', 'Numbness and Tingling (433)', 'Weakness (645)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: ' Did the injury result from a new traumatic event, and are any of the following present?',
            list: [ 'Difficulty breathing', 'Severe back or neck pain', 'Inability to move fingers or toes', 'Numbness, tingling, or weakness in arms, legs, fingers, or toes', 'Incontinence' ],
            true: 'Call ambulance, support breathing, do not move person and follow emergency home care instructions'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Traumatic event within past week and the following:', 'Weakness or incontinence', 'Increasing or persistent numbness or tingling' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Age > 65 years History of cancer or bleeding disorder' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ ' Continued mild to moderate neck or back pain unresponsive to rest, heat, ice, and pain medications', 'Mild to moderate neck or back pain and home care measures not initiated' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Emergency Instructions' = [ 'Do not move injured person; keep person warm.', 'Apply sandbags, books, rolled magazines, sheets, or towels to both sides of the neck if a neck injury is suspected. Secure with tape from one support, across the forehead, to the opposite support.', 'If the victim is in the water, support the body and neck as one unit until medical help arrives. Positioned at the head of the victim, the rescuer should extend his/her arms under the victim’s head, neck, and shoulders, keeping the back and neck in a straight line. Do not allow the neck to bend forward, backward, or side to side.' ], 'Apply ice packs to affected area for 20 minutes every 2 to 4 hours for as long as 48 hours after injury.', 'After 48 hours, apply heat to the area for discomfort.', 'Take your usual pain medication. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rest; limit activities until medically evaluated or pain subsides.' ],
        reportToPCP: [ ' Shooting pain into leg, buttocks, or arms Pain worsens No improvement in 3 days' ],
        seekEmergencyCare: [ ' Severe headaches', 'Tingling, weakness, or numbness in the extremities', 'Bowel or urine incontinence' ]
      },
      'Back Pain': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Location', 'Medications', 'Pain Scale', 'History' ],
        otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11); Back/Neck Injury (56); Chest Pain (118); Numbness and Tingling (433); Pregnancy Problems (481); Urination, Painful (626), Abnormal Color (628); Weakness (645)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ ' Progressive weakness in legs', 'New sudden onset of numbness or tingling in legs or feet or loss of bladder or bowel control', 'New onset of numbness in groin or rectal area', 'New-onset, rapidly increasing pain, and age >60 years', 'Dizziness, light-headedness, or abdominal fullness', 'Inability to urinate for >8 hours', 'Cool, moist skin', 'Pain radiates to neck, shoulders, jaw, or arm' ],
            true: 'Seek emergency care now, See Back/Neck Injury protocol (56) if recent back injury or traumatic accident has occurred'
          },
          {
            B: 'Are any of the following present?',
            list: [ ' Severe pain with blood in the urine “Seek medical care', 'Difficulty moving legs, feet, or toes', 'Fever with nausea or vomiting in a female', 'Sudden pain after a prolonged period of time in bed or a wheelchair, or if > age 60 years', 'New-onset, rapidly increasing pain, and age < 60 years', 'Pain radiates to groin or genitals' ],
            true: 'Seek medical care immediately'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Pain radiates to buttocks or limbs', 'Persistent severe pain', 'Frequent urination or pain with urination', 'Some difficulty walking because of discomfort', 'No relief with OTC medications', 'Fever with nausea or vomiting in a male', 'History of trauma > 48 hours', 'History of diabetes, a weakened immune system, or steroid use', 'History of cancer or unexplained weight loss', 'Intravenous drug abuse', 'Pain worse at night or when lying down', 'Blisters or rash and pain in same area', 'Persistent loss of bowel or bladder control', 'Persistent numbness or tingling in legs or feet' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'History of chronic back pain, back problems, back surgery, kidney stones, or renal disease', 'Mild pain without radiation or limited movement', 'Fever with flu-like symptoms' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Restrict to light activities for 2 to 3 days.', 'Use a firm mattress or place a board under a soft mattress.', 'Avoid activities such as prolonged sitting, lifting, or jumping until the pain is resolved (do not stay in bed).', 'Take your usual pain medication for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'If pain is related to an injury, apply ice packs for the first 24 hours, then moist heat. Use moist heat (shower, tub, or moist hot towels) for 20 to 30 minutes every 2 hours for 48 hours, but only while person is awake.', 'Sleep in a fetal position or on the back with one to two pillows under the knees to help reduce discomfort.', 'For intermittent or chronic back discomfort, use a heating pad on the affected area 20 to 30 minutes every 2 to 4 hours. Do not sleep on a heating pad. Do not apply heating pad directly to the skin without a cloth barrier between heating pad and skin.' ],
        reportToPCP: [ ' No improvement in 3 days', 'Pain worsens', 'Pain radiates into a limb, groin, or genitals', 'Painful urination, frequent urination, fever, or blood in the urine' ],
        seekEmergencyCare: [ ' New onset of persistent numbness or tingling in legs or feet, or loss of bowel or bladder control, or inability to urinate for > 8 hours', 'Weakness in the limbs', 'New-onset cool, moist skin, or pain radiates to neck, shoulders, jaw, or arm' ]
      },
      'Neck Pain': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Associated Symptoms', 'Medications', 'History', 'Pain Scale' ],
        otherProtocolstoConsider: [ 'Back/Neck Injury (56)', 'Chest Pain (118)', 'Glands, Swollen or Tender (292)', 'Jaw Pain (389)', 'Mumps (413)', 'Numbness and Tingling (433)' ],
        nurseAlert: 'There are many conditions that can cause neck pain. When neck pain is associated with several other symptoms, triage with caution and note signs that may be an indication of a more serious condition such as meningitis (pain bending head forward, headache, fever, vomiting, confusion, photophobia) or a heart attack (chest, neck, back or jaw pain, sweating, palpitations, nausea, and/or vomiting).',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is neck pain related to an injury?',
            list: [ null ],
            true: 'Got to Back/Neck Injury protocol (56)'
          },
          {
            B: ' Is chest pain present?',
            list: [ null ],
            true: 'Got to Chest Pain protocol (118)'
          },
          {
            C: 'Sudden onset of pain, and are any of the following present?',
            list: [ 'History of cardiac disease or angina', 'Jaw pain', 'Sweating, palpitations, nausea, and/or vomiting', 'Difficulty breathing', 'Pain worsens when head is bent toward chest and any of the following:' = [ 'confusion/drowsiness', 'severe headache', 'light sensitivity', 'fever', 'purple or blood-colored rash'], 'Numbness, tingling, weakness in both arms or legs', 'Changes in bowel or bladder control', 'Head involuntarily turns to side' ],
            true: 'Seek emergency care now'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Weakness or numbness in one arm', 'Signs of infection: pain, swelling, redness, drainage, warmth, or red streaks', 'Fever > 103°F (39.4°C)', 'Fever > 101°F (38.3°C) and history of diabetes, elderly, immunosuppressed, or IV drug abuse', 'Swollen, painful lymph nodes > 1″ (2.5 cm)', 'Swollen, painful nodes and difficulty swallowing' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Rash', 'Sore throat associated with neck pain', 'Pain interferes with sleep or activity', 'Swelling on one or both sides of the neck' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            F: 'Are any of the following present?',
            list: [ 'Slept in an awkward position', 'New exercise or activity', 'Recently carried heavy bag, purse, or other object using a shoulder strap', 'Pain worsens with lateral movement', 'History of prolonged sitting at a computer terminal or work station', 'Intermittent pain and history of prior neck problems' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Apply heat to neck for 20 minutes every 2 hours. Be careful with heat if diabetic. Do not sleep on a heating pad.', 'Sleep with a towel folded around neck to lessen neck movement.', 'Carry purse or briefcase under arm, rather than over the shoulder.', 'Avoid prolonged sitting. Frequently stretch and move around.', 'Exercise regularly to develop strong neck muscles.', 'Soak in hot bath or whirlpool.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen) as directed by your physician. Do not give aspirin to a child. Avoid aspirinlike products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Maintain good posture and proper body align ' ],
        reportToPCP: [ 'Rash, fever, or increased pain bending neck forward', 'No improvement or condition worsens' ],
        seekEmergencyCare: [ 'Chest pain', 'Difficulty breathing', 'Numbness, tingling, or weakness in both arms or legs', 'Severe headache and confusion', 'Sweating, palpitations, nausea, and/or vomiting', 'Swelling to one side of the neck with pain on palpation with or without fever', 'Loss of bowel or bladder control', 'Pain worsens when head is bent toward chest, confusion/drowsiness, severe headache, light sensitivity, fever, purple or blood-colored rash' ]
      },
  },
  'Chest/Cardiovascular Problems': {
    'Bleeding, Severe': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Location', 'Medications', 'Pain Scale', 'History' ],
      otherProtocolstoConsider: [ 'Bites, Animal/Human (73)', 'Chest Trauma (122)', 'Extremity Injury (213)', 'Vomiting, Adult (638), Child (641)', 'Nosebleed (427)', 'Rectal Bleeding (510)', 'Rectal Problems (513)', 'Shock, Suspected (548)', 'Vaginal Bleeding (630).' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Gunshot, knife, or other penetrating wound and difficulty controlling bleeding', 'Signs of shock:' = [ 'light-headedness', 'skin is pale, cold, or moist', 'thirst', 'rapid pulse' ], 'Blood is spurting from the wound and cannot be controlled with direct pressure', 'Penetrating wound to abdomen, chest, or neck', 'Exposed bone or deformity at injury site' ],
          true: 'Call ambulance and Follow Home Care Instructions. Do not remove penetrating object'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent bleeding > 10 minutes after application of “Seek emergency direct pressure', 'Gaping bleeding wounds', 'History of bleeding disorder and difficulty controlling the bleeding', 'Taking a blood thinner medication', 'Unable to move limb or digit beyond the injury site' ],
          true: 'Seek emergency care now'
        }
      ],
      homeCareInstructions: [ ' Lay person down and elevate the injured part.', 'Apply pressure directly over the area for at least 10 minutes.', 'If wound is spurting blood, apply pressure with palm of hand and sterile or clean bandages directly over the wound.', 'If spurting persists with direct pressure, apply pressure to the artery between the heart and injury site.', 'Maintain pressure until bleeding stops or help arrives.', 'If bandage is saturated with blood, do not remove; apply additional bandages on top of the bandage.' ],
      reportToPCP: [ 'Swelling/bleeding occurs > 24 hours after bleeding is under control', 'Signs of infection: increased pain, drainage, fever, swelling, pus, streaks, or redness' ],
      seekEmergencyCare: [ 'Signs of shock:' = [ 'light-headedness', 'pale, cold, or moist skin', 'excessive thirst', 'rapid pulse' ] ]
    },
    'Chest Pain': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History of Myocardial Infarction', 'Coronary Artery Disease', 'Diabetes', 'Pulmonary Embolus, or Deep Vein Thrombosis', 'Associated Symptoms', 'Medications', 'Pain Scale', 'History', 'Implanted Device in Chest' ],
      otherProtocolstoConsider: [ 'Anxiety (37)', 'Breathing Problems (101)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Congestive Heart Failure (149)', 'Cough (163)', 'Dizziness (192)', 'Heartburn (313)', 'Heart Rate Problems (317)', 'Indigestion (370)', 'Vomiting, Adult (638)', 'Sweating, Excessive (592)', 'Weakness (645)' ],
      nurseAlert: 'There are many conditions that cause chest pain; some can be potentially life-threatening. Err on the side of caution when triaging callers with chest pain. Chest Pain: Causes and Characteristics Appendix S (696) is provided to help the nurse gain a better understanding of the many conditions causing chest pain. It is NOT to be used to try and diagnose a caller’s condition.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Continuous or intermittent pain, tightness, pressure, or discomfort accompanied by:' = [ 'shortness of breath', 'dizziness or weakness', 'cool, moist skin', 'nausea or vomiting', 'pain in the neck, shoulders, jaw, back, or arms', 'blue or gray face, lips, earlobes, or fingernails', 'heart palpitations' ], 'Chest pain persists, unrelieved by rest, pain medication, antacids, or nitroglycerin every 5 minutes for three doses' ],
          true: 'Call ambulance and chew one adult aspirin unless allergic to aspirin'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Change in chest pain pattern in known cardiac patient', 'Pain not relieved by two nitroglycerin tablets', 'Chest pain at rest or that awakens person', 'Recent period of prolonged sitting (such as during traveling)', 'Strong family history of heart disease, heart attack, stroke, or diabetes', 'History of diabetes, heart disease, CHF, or blood clotting problems', 'Age > 30 and heavy smoker with high blood pressure, high cholesterol, or obesity', 'Pain, swelling, warmth, or redness of leg', 'Sudden onset of swollen ankles', 'Coughing up blood', 'Fever, cough, congestion, and shortness of breath', 'Trauma, childbirth, or surgery in past month', 'History of blood clotting problems', 'Recreational street drug or prescription drug abuse within past 24 hours', 'Age > 35 and heart palpitations', 'Repeated shocks and internal defibrillator in place' ],
          true: 'Seek emergency care now, do not drive yourself. If another driver is not available, call an ambulance'
        },
        {
          C: 'Is the following present?',
          list: [ 'Localized area of painful blisters or rash', 'Recent injury and pain increases with movement', 'Chest pain with exertion that is relieved with rest', 'Fracture < 2 months previously' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Pain occurs with deep breathing', 'Pain occurs when pressure is applied to the area', 'Intermittent mild chest discomfort with deep productive coughing' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'For heartburn or GERD:' = [ 'Take your usual antacid (Maalox, Mylanta, Riopan, Tums, Pepcid, Prilosec, or other antacid) for indigestion and follow instructions on the label.', 'Liquids provide faster relief than tablets.', 'Consult with PCP if taking other medications.', 'Do not give Pepto-Bismol to a child.', 'Avoid eating 2 to 3 hours before bedtime.' ], 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Take nitroglycerin as directed by PCP if pain is typical chest anginal pain; if no relief after 3 to 5 minutes, take aspirin and another nitroglycerin dose and have someone drive you to the ED or call an ambulance. Do not take aspirin if you are currently on anticoagulant therapy.', 'If pain is related to an injury that occurred 24 hours ago or longer and pain increases with movement, apply heat to the area for 20 minutes, 4 times a day.', 'For a cough:' = [ 'Drink 6 to 8 glasses of water daily (if no fluid restrictions prescribed).', 'Breathe steam from a shower or tea kettle with towel held over the head for 10 to 15 minutes to loosen phlegm.', 'Elevate head of bed to reduce coughing at night.', 'Drink warm lemonade, apple cider, or tea to help soothe cough.', 'Avoid irritants such as smoking, smog, and chemicals.', 'Turn down the heat, open the windows, or go out into cooler air to help suppress cough.', 'Take cough suppressants (ask your pharmacist for product suggestions) if cough is interfering with activity, causing chest pain or vomiting, or interrupting sleep at night. Follow instructions on the label. Do not use if age < 1 year.', 'If congested, avoid milk products.', 'Take OTC medications as needed, being sure to follow instructions on the label: for a wet cough, use a decongestant; for a dry cough, use an expectorant during the day and suppressant at night; for an allergy, use an antihistamine or decongestant. Ask your pharmacist for product suggestions.' ] ],
      reportToPCP: [ ' No improvement or condition worsens', 'Localized area of painful blisters or rash' ],
      seekEmergencyCare: [ 'Continuous or intermittent pain, tightness, pressure, or discomfort accompanied by' = [ 'shortness of breath', 'dizziness', 'cool, moist skin', 'nausea or vomiting', 'pain in the neck, shoulders, jaw, teeth, back, or arms', 'blue or gray face, lips, earlobes, or fingernails', 'heart palpitations' ], 'No relief from repeated nitroglycerin every 5 minutes for two doses', 'Repeated shocks with internal defibrillator in place', 'Severe pain' ]
    },
    'Chest Trauma': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'Pain Scale', 'History' ],
      otherProtocolstoConsider: [ 'Bleeding, Severe (86)', 'Breathing Problems (101)', 'Chest Pain (118)', 'Cough (163)', 'Shock, Suspected (548)', 'Weakness (645)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Recent injury to the chest or trunk and are any of the following present?',
          list: [ 'Severe shortness of breath', 'Altered mental status', 'Lips or face are blue, very pale, or gray', 'Air bubbles in chest wound with inspiration', 'Severe pain in chest wall or over breastbone', 'Foreign object impaled in chest wall', 'Difficulty breathing, pain, and chest moves in with inspiration and out with expiration' ],
          true: 'Call ambulance and Follow Emergency Home are Instructions'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Increasing pain with movement or breathing', 'Increasing shortness of breath', 'Coughing up blood or pink frothy sputum' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain > 48 hours', 'Fever', 'Green, yellow, or brown sputum > 48 hours', 'Light-headedness develops after 24 hours' ],
          true: 'Seek medical care within 24 hours and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Emergency Instructions' = [ 'For sucking chest wound, cover wound with plastic wrap or layers of tape to prevent the movement of air into the wound. Seal in place when patient is exhaling.', 'Do not remove objects impaled in chest.' ], 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Support painful ribs with a pillow if movement increases pain.' ],
      reportToPCP: [ ' Increased difficulty breathing, fever, pain, or light-headedness', 'Green, yellow, or brown sputum' ],
      seekEmergencyCare: [ ' Altered mental status', 'Sudden severe pain or shortness of breath', 'Cool, clammy, pale skin', 'Coughing up blood or pink frothy sputum' ]
    },
    'Heartburn': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Associated Symptoms', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Chest Pain (118)', 'Gas/Belching (282)', 'Indigestion (370)', 'Vomiting, Adult (638), Child (641)', 'Swallowing Difficulty (589)' ],
      nurseAlert: 'Heartburn can mimic chest pain. There are many conditions that cause chest pain; some can be potentially life-threatening. Error on the side of caution when triaging callers with chest pain. Chest Pain: Causes and Characteristics: Appendix S (696) is provided to help the nurse gain a better understanding of the many conditions causing chest pain. It is NOT to be used to try and diagnose a caller’s condition.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'In addition to a burning or heavy sensation, are any of the following present?',
          list: [ 'Shortness of breath', 'Cool, moist skin', 'Pain in the neck, jaw, shoulders, back, or arms', 'Blue or gray face, lips, earlobes, or fingernails', 'Fainting', 'Vomiting blood or dark coffee-grounds–like emesis' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' History of diabetes or cardiac disease', 'Dizziness or light-headedness' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Discomfort persists after taking antacids', 'Condition worsening, requiring more frequent use of antacids', 'Difficult or painful swallowing', 'Sensation that pill is stuck in esophagus' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Pain increased with use of medications', 'Increased pain bending over, exercising, or lying down soon after eating', 'Nausea or vomiting', 'Pregnancy', 'Frequent belching', 'Burping stomach contents into mouth', 'Obesity', 'Heavy tobacco or alcohol use', 'Increased stress' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Try OTC antacids (Maalox, Mylanta, Riopan, Tums) and follow directions on bottle. Try OTC Pepcid AC, Tagamet HB, Zantac, or Prilosec. Consult with PCP if taking other prescription medications. Liquids provide faster relief than tablets. Do not give Pepto-Bismol to a child. Ask pharmacist for additional product suggestions.', 'Avoid eating or drinking 2 to 3 hours before going to bed.', 'Do not lie down, bend over, or exercise soon after eating.', 'Elevate head of bed 4 to 6 inches using blocks or bricks, or lie on left side to help speed stomach emptying and reduce reflux.', 'Eat small meals, but eat them more than three times a day.', 'Avoid spicy foods, alcohol, coffee, smoking, chocolate, citrus fruits, tomatoes, vinegar, fatty foods, or any other food or drink that triggers heartburn.', 'If aspirin or ibuprofen worsens the problem, try acetaminophen. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid tight-fitting clothing, such as girdles, belts, control-top pantyhose, and pants or skirts with a tight-fitting waistband.', 'Fifty minutes after dinner, sip 1 tsp apple cider vinegar, diluted in water or juice; this will help hasten digestion of food, lessening reflux when sleeping.' ],
      reportToPCP: [ 'Discomfort occurs after taking prescribed medication', 'No improvement in 3 days or condition worsens', 'No relief from antacids or other OTC drugs (such as Pepcid AC or Zantac)', 'Frequent use of antacids', 'Difficult or painful swallowing' ],
      seekEmergencyCare: [ 'Shortness of breath', 'Dizziness', 'Cool, moist skin', 'Pain or discomfort in neck, jaw, shoulders, back, or arms', 'Blue or gray face or lips', 'Fainting', 'Vomiting blood or dark coffee-grounds–like emesis' ]
    },
    'Heart Rate Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Rate', 'Medications', 'History', 'Implanted Device in Chest' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', 'Anxiety (37)', 'Breathing Problems (101)', 'Chest Pain (118)', 'Dizziness (192)', 'Fatigue (235)', 'Headache (303)', 'Hypertension (347)', 'Hyperventilation (350)', 'Hypotension (353)', 'Weakness (645)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is heart rate > 150 bpm and are any of the following present?',
          list: [ 'Chest, neck, jaw, or arm pain or discomfort', 'Difficulty breathing', 'Skin cool and moist or hot and dry', 'Face or lips blue, gray, or very pale', 'Fainting' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent rapid heart rate of > 150 bpm for > 30 minutes', 'Light-headedness, faintness, or dizziness', 'Persistent rapid heart rate and history of thyroid disease or heart disease', 'Repeated shocks with internal defibrillator in place', 'Slow heart rate and extreme fatigue or frequent episodes of a slow heart rate', 'Persistent slow heart rate and pauses of > 3 seconds (count 1,001, 1,002, 1,003)' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Frequent episodes of a rapid heart rate', 'Persistent slow heart rate and history of heart disease, general ill feeling, or frequent falls', 'Recent history of persistent vomiting or diarrhea' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'History of prior treatment for rapid heart rate', 'Recent ingestion of diuretics, diet pills, decongestants, cold remedies, β-blockers, thyroid medication, a new medication, or recreational drugs', 'History of bronchodilator use and new prescription or increase in dose', 'Excessive use of caffeine, tobacco, alcohol, or herbal stimulants', 'Difficulty sleeping or persistent fatigue', 'Increase in stress', 'Exercise < 30 minutes before onset of symptoms', 'Frequent skipped beats', 'Unexplained weight gain, fatigue, and feeling cold', 'Fever' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'To slow down heart rate:' = [ 'take a deep breath; hold and pinch nostrils closed. Gently try to exhale through the nose', 'take a deep breath and bear down as if having a bowel movement', 'try to blow up a balloon', 'take a cold shower and let cold water splash on the face and head', 'try to remain calm', 'rest and relax', 'try to identify the trigger and discuss it with PCP if problem persists', 'avoid medications that seem to worsen the problem', 'avoid caffeine and alcohol' ] ],
      reportToPCP: [ 'Problem persists or worsens', 'Light-headedness or faintness' ],
      seekEmergencyCare: [ 'Chest, neck, jaw, or arm pain', 'Difficulty breathing', 'Cool and moist skin', 'Face or lips blue, gray, or very pale', 'Fainting', 'Loss of consciousness or altered mental status' ]
    },
    'Hypertension': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Known Hypertension', 'Last Elevated Blood Pressure Reading', 'Medications', 'History (If pregnant, see Pregnancy, Hypertension protocol)' ],
      otherProtocolstoConsider: [ 'Dizziness (192)', 'Headache (303)', 'Hypotension (353)', 'Nosebleed (427)', 'Pregnancy, Hypertension (472)', 'Pregnancy Problems (481)' ],
      nurseAlert: 'Use this protocol only if caller has questions about high blood pressure, has been diagnosed with hypertension, is taking medication for hypertension, or regularly takes blood pressure readings and is concerned about elevated reading.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Chest pain in addition to high blood pressureChest pain in addition to high blood pressure' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          B: 'Elevated blood pressure (diastolic > 100 mm Hg), and are any of the following present?',
          list: [ 'History of thoracic or abdominal dissection', 'Severe headache, blurred vision, nausea, or vomiting', 'Drowsiness or confusion', 'Persistent numbness and tingling in hands and feet', 'Coughing up blood or blood-tinged sputum', 'Difficulty breathing', 'Persistent nosebleed unresponsive to home care measures', 'Diastolic blood pressure of > 110 mm Hg', 'Severe weakness', 'Under medical care for blood pressure control, and persistent blood pressure > 160/100 mm Hg and under medical care for blood pressure control', 'Dizziness or light-headedness' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Periods of dizziness after starting new blood pressure medication', 'Intermittent nosebleed', 'Blood pressure elevation and recent change in blood pressure medications', 'Blood pressure elevation and taking OTC cold medications' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Persistent blood pressure readings > 140/90 mm Hg', 'Recent increase in stress', 'Increased use of alcohol', 'Blood pressure elevation and missed a dose of medication' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Measure blood pressure weekly if > 140/90 mm Hg.', 'Avoid smoking and alcohol consumption.', 'Eat a well-balanced, low-fat, low-salt diet. If overweight, start a weight-reduction program. Discontinue use of caffeine, nicotine, and licorice.', 'Exercise regularly. Start with walking.', 'Learn how to manage stress effectively. Read, exercise, take classes on stress reduction, meditate, do yoga.', 'If taking blood pressure medication, avoid cold remedies with antihistamines and decongestants. Consult with PCP before taking such medications.', 'Take blood pressure medication regularly. Do not skip doses. Do not stop or change medication without consulting PCP.', 'When experiencing symptoms of high blood pressure, do not drive.' ],
      reportToPCP: [ 'Periods of dizziness, constipation, impotence, or tongue swelling after starting new blood pressure medication', 'Under medical care for blood pressure control and persistent elevated blood pressure > 160/100 mm Hg', 'Blood pressure > 140/90 mm Hg consistently for > 3 months' ],
      seekEmergencyCare: [ 'Severe headache or blurred vision', 'Drowsiness or confusion', 'Persistent numbness and tingling in hands and feet', 'Coughing up blood or blood-tinged sputum', 'Difficulty breathing', 'Chest pain or heart palpitations', 'Persistent nosebleed' ]
    },
    'Hypotension': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Last Systolic Blood Pressure Reading', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Chest Pain (118)', 'Cold Exposure Problems (135)', 'Confusion (142)', 'Dizziness (192)', 'Fainting (228)', 'Heart rate Problems (317)', 'Weakness (645)' ],
      nurseAlert: 'Use this protocol only if caller has questions about low blood pressure, regularly takes blood pressure readings and is concerned about low blood pressure reading, or known low blood pressure reading and symptoms of concern',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'In addition to low blood pressure, is chest pain present?',
          list: [ null ],
          true: 'Go to Chest Pain protocol'
        },
        {
          B: 'Systolic pressure < 90 mm Hg, sudden onset, and are any of the following present?',
          list: [ 'Cool, pale, moist skin', 'Drowsiness or confusion', 'Hot dry skin and rapid pulse', 'Shoulder or abdominal pain', 'Recent injury, fall, or blunt force', 'Rapid pulse > 120 bpm', 'Fainting', 'Fever, rapid pulse, hypotension' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Feeling faint when sitting or rising from seated position', 'Persistent bleeding' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Periods of dizziness after starting new blood pressure medication', 'While taking blood pressure medication or diuretics, hypotension and symptoms persist', 'Pregnancy' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Is the following present?',
          list: [ 'Persistent systolic blood pressure readings < 90 mm Hg and no other symptoms', 'Caller concerned about low blood pressure and no other symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Change positions slowly when rising to a sitting or standing position.', 'Take prescribed medications as directed.', 'Avoid sudden significant weight loss while dieting or use of diuretics in weight control.', 'If taking blood pressure medication, avoid cold remedies with antihistamines and decongestants. Consult with PCP before taking such medications.', 'Take blood pressure medication regularly and do not skip doses.' ],
      reportToPCP: [ ' Periods of dizziness after starting new blood pressure medication', 'Under medical care for blood pressure control and systolic persistent blood pressure < 90 mm Hg', 'Repeated fainting episodes' ],
      seekEmergencyCare: [ 'Cool, pale, moist skin', 'Drowsiness or confusion', 'Hot dry skin and rapid pulse', 'Chest or abdominal pain', 'Rapid pulse > 120 bpm', 'Fever, hypotension, or rapid pulse', 'Fainting' ]
    },
    'Shock, Suspected': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medication', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Anxiety (37)', 'Bleeding, Severe (86)', 'Breathing Problems (101)', 'Confusion (142)', 'Electric Injury (210)', 'Heart Rate Problems (317)', 'Heat-Exposure Problems (320)', 'Hypotension (353)', 'Weakness (645)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'In addition to the classic signs of shock (pale, sweaty skin, and confusion or drowsiness), are any of the following present?',
          list: [ ' Weak, rapid heart rate', 'Rapid, shallow breathing', 'Anxiety, restlessness', 'Thirst', 'Faintness, dizziness, weakness, altered mental status, unresponsive' ],
          true: 'Call ambulance and Follow Home Care Instrucions.Seek medical care now and Follow Home Care Instructions and See Other Protocols to Consider'
        }
      ],
      homeCareInstructions: [ 'Clear the airway and provide CPR as needed.', 'Lay the victim down with a pillow under the head and the legs elevated about 12″ (30 cm).', 'If suspected injury to head, neck, back, or chest, keep the legs flat and support neck.', 'Control any bleeding by applying firm direct pressure to the area.', 'Keep warm; cover with a blanket. In hot climates, keep the victim cool.', 'If vomiting occurs, roll the victim to one side, keeping the head, neck, and body in a straight line.', 'Do not give anything to drink, even if the victim is thirsty.', 'Provide comfort and reassurance to help relieve anxiety.' ],
      reportToPCP: [ null ],
      seekEmergencyCare: [ null ]
    },
  },
  'Respiratory Problems': {
      'Allergic Reaction': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Suspected Cause', 'Allergies', 'Prior History', 'Medications' ],
        otherProtocolstoConsider: [ 'Bee Stings (69)', 'Bites, Insect (76)', 'Breathing Problems (101)', 'Food Allergy (252)', 'Hay Fever Problems (300)', 'Hives (335); Itching (384)', 'Piercing Problems (446)', 'Rash, Adult (501), Child (505)', 'Swelling (595)', 'Tattoo Problems (602)', 'Wheezing (652)' ],
        nurseAlert: 'Signs of anaphylaxis, a severe life-threatening allergic reaction, can occur within seconds to an hour after exposure to the offending substance such as food, medication, a bee sting, etc. An anaphylactic reaction involves the respiratory, cardiovascular, and central nervous systems. Sudden onset of symptoms may include: difficulty breathing, feeling faint, swelling of the tongue, throat or lips, hives, wheezing or coughing, or a feeling of impending doom. The sooner symptoms occur after exposure to the antigen, the more severe the anaphylaxis.',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Difficulty breathing', 'Difficulty swallowing', 'Swelling of tongue or back of mouth', 'Inability to speak', 'Chest pain' ],
            true: 'Call ambulance'
          },
          {
            B: 'Are any of the following present?',
            list: [ ' Faintness or dizziness', 'History of previous anaphylaxis to same allergen', 'Change in vision', 'Confusion', 'Rapid progression of symptoms', 'Speaking in short words', 'Sudden onset of hoarseness' ],
            true: 'Seek emergency care now'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Swelling in face/extremities', 'Persistent nausea, vomiting, or diarrhea', 'Persistent rash, fever, fatigue, or headache', 'Speaking in partial sentences' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Cause of reaction unknown', 'Controlled nausea, vomiting, or diarrhea', 'Mild rash/itching', 'No respiratory problems', 'Normal breathing', 'Suspicion of medication reaction' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ ' Use prescribed inhalers, medications or Epi Pen for known allergic reaction as directed by PCP.', 'If symptoms occurred shortly after taking an OTC medication, discontinue use.', 'Rest.', 'If hives are widespread, try baking soda or oatmeal baths, or OTC preparations (Benadryl, Caladryl, Cortaid, Cortizone, Claritin) for the itching. Follow instructions on the label. Ask your local pharmacist for OTC product suggestions.', 'Avoid hot showers. Heat can increase itching.', 'Apply cold cloth or ice to small area of itchy hives.' ],
        reportToPCP: [ 'Symptoms occurred after taking a prescription medication', 'Symptoms persist after taking Benadryl and following Home Care Instructions', 'Rash worsens', 'Fever' ],
        seekEmergencyCare: [ ' Difficulty breathing or swallowing', 'Change in vision', 'Confusion', 'Chest pain', 'Sudden onset of hoarseness' ]
      },
      'Asthma': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Prior Asthma History', 'Severity', 'Peak Flow Measurement', 'Prior Treatment', 'Medications', 'Prior History', 'Suspected or Known Triggers' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Choking (130)', 'Congestion (145)', 'Fever, Adult (241), Child (244)', 'Hay Fever Problems (300)', 'Wheezing (652)' ],
        nurseAlert: ' Use this protocol only if previously diagnosed with asthma. Peak flow meters measure how well air is moving out of the lungs and help to gauge the severity of an asthma attack. Peak flow values are divided into three zones:',
        alertBullets: [ 'Green: 80% of baseline or higher (Mild attack)', 'Yellow: 50% to 80% of baseline (Moderate attack)', 'Red: less than 50% of baseline (Severe attack)' ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Persistent wheezing after a treatment', 'Difficulty breathing', 'Inability to breathe lying down; must sit up to breathe', 'Dusky or blue lips, tongue, or face', 'Sudden onset of wheezing after medication, food, bee sting, or exposure to known allergen', 'Weakness, listlessness', 'Speaking in short words', 'Peak flow rate < 50% baseline', 'Severe wheezing  or cough, and nebulizer or inhaler not available' ],
            true: 'Seek emergency care now, if breathing difficulty is severe, call an ambulance'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Vomiting and inability to retain medication', 'Upper respiratory infection symptoms and history of:' = [ 'steroid treatment', 'prior hospitalization for same symptoms', 'intubations' ], 'Speaking in partial sentences', 'Peak flow rate 50%–80% of baseline and no improvement using nebulizer or inhaler', 'Nebulizer or inhaler used < every 4 hours' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Fever > 100.5°F (38.1°C)', 'Cough unresponsive to medication', 'Minimal or temporary relief of asthma symptoms with current medications', 'Yellow or green sputum', 'Peak flow rate > 50%–80% of baseline' ],
            true: 'Seek medical care within 24 hours and Follow Home Care Instructions'
          },
        ],
        homeCareInstructions: [ ' Increase fluid intake; consume water and clear fluids.', 'Treat symptoms early to decrease severity of asthma attack. Use preventive medication as prescribed by PCP.', 'Use a vaporizer, steamy bathroom, or cool damp air to help relieve symptoms.', 'Follow treatment plan as prescribed by PCP.', 'Avoid aspirin products and decongestants.', 'Shower every night to reduce pollen exposure.', 'Limit exposure to pets, particularly in sleeping areas.', 'Avoid smoky and dusty areas. Encourage smokers in the home to smoke outside.', 'Avoid known triggers, i.e., animal dander, body and hair products, and cleaning solvents', 'If asthma symptoms are induced by strenuous exercise, take medication 90 minutes before activity (use inhaler 30 minutes before activity).' ],
        reportToPCP: [ ' No improvement after medication', 'Difficulty breathing', 'Prescribed treatment plan is unclear', 'Peak flow rate 50% to 80% of baseline', 'Nebulizer or inhaler used < every 4 hours' ],
        seekEmergencyCare: [ ' Breathing difficulty worsens', 'Face, tongue, or lips become dusky or blue', 'Weakness, listlessness', 'Peak flow rate < 50% of baseline' ]
      },
      'Breathing Problems': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Allergic Reaction (26); Asthma (49); Chest Pain (118); Choking (130); Congestion (145); Congestive Heart Failure (149); Cough (163); Foreign Body, Inhaled (263); Hyperventilation (350); Wheezing (652)' ],
        nurseAlert: 'If known respiratory problems and prescribed inhalers, O2 or peak flow meters (to measure how well air is moving out of the lungs). Assess baseline functioning, O2 saturation level, % oxygen delivery amount and method. Peak flow values are divided into three zones:',
        alertBullets: [ 'Green: 80% of baseline or higher (mild attack)', 'Yellow: 50% to 80% of baseline (moderate attack)', 'Red: <50% of baseline (severe attack)' ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Chest pain', 'Blue lips or tongue', 'Clammy skin', 'Feeling of suffocation', 'Frothy pink or copious white sputum', 'Altered mental status', 'Severe shortness of breath with sudden onset', 'History of pulmonary embolus, blood clots, or lung collapse', 'Severe wheezing and history of asthma not relieved with inhaler', 'Inability to speak', 'Drooling and inability to swallow', 'Difficulty breathing' ],
            true: 'Call ambulance'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Difficulty taking a deep breath because of severe pain', 'Severe SOB, wheezing, or noisy breathing started within past 2 hours', 'Recent trauma, surgery, or childbirth', 'Inhalation of a foreign body', 'Exposure to something that previously caused a significant reaction (sting, medication, plant, chemical, food, or animal)', 'Speaking in short words', 'Inability to breathe lying down or need to sit up to breathe', 'Immunosuppressed, age > 60, history of sickle cell anemia or diabetes, or bedridden and temperature > 101°F (38.3°C)', 'Peak flow rate < 50% baseline', 'Adult with temperature > 103°F (39.4°C)', 'Progressively worsening shortness of breath' ],
            true: 'Seek emergency care now'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Speaking in partial sentences', 'Tight cough', 'Mild audible wheezes at rest', 'Pain increasing with breathing', 'Upper respiratory infection and prior hospitalizations for same symptoms', 'Inability to sleep > 1 to 2 hours due to coughing or difficulty breathing', 'History of diabetes or heart disease', 'Peak flow rate 50% to 80% baseline' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Fever', 'Productive cough with gray, green, or yellow sputum', 'Peak flow rate > 80% of baseline' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Numbness or tingling in the fingers or face', 'Recent exposure to a stressful event or situation', 'Exposure to environmental irritants, allergies, or recent cold or flu symptoms', 'Nasal congestion', 'Productive cough with clear sputum' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Use routine prescriptions as directed.', 'Rest or sleep with head elevated on a couple of pillows if lying flat increases breathing difficulty.', 'Increase fluid intake unless your physician has prescribed a fluid-restricted regimen.', 'Avoid environmental irritants (smoke, smog, garden cuttings, chemicals, animals) and other irritants that seem to worsen your symptoms.', 'If rapid breathing, tingling in the face or hands, and anxiety are present, breathe into a small paper bag held loosely around the mouth and nose for 5 minutes. The problem should resolve within that time period.', 'Rest and relax as much as possible.', 'If the problem is caused by excitement, heavy exertion (and resolved within a few minutes and there are no cardiac risk factors), or nasal congestion, there is no real cause for concern. Normal breathing should resume in a short period of time.', 'Monitor peak flow rates.' ],
        reportToPCP: [ 'Condition worsens or no improvement in 2 days', 'Temperature > 101°F (38.3°C)', 'Peak flow rate 50% to 80% of baseline' ],
        seekEmergencyCare: [ ' Chest pain', 'Blue lips or tongue, pale or gray face', 'Clammy skin', 'Feeling of suffocation', 'Frothy pink or copious white sputum', 'Decreased level of consciousness', 'Inability to speak', 'Drooling, unable to swallow saliva', 'Peak flow rate < 50% of baseline' ]
      },
      'Choking': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Pain Scale', 'History' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101); Cough (163); Foreign Body, Swallowing of (274); Sore Throat (567); Swallowing Difficulty (589); Weakness (645)' ],
        nurseAlert: 'If actively choking, and unable to speak, cough, or breathe, instruct caller to call Emergency Medical Services (EMS) or 911. Dispatchers are specially trained in giving emergency procedure instructions over the phone while the ambulance is on the way. If caller is unable to call 911, make the call for them.',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is the following present?',
            list: [ 'Person is conscious and unable to speak, cough, or breathe' ],
            true: 'Call EMS/911 for emergency choking procedures'
          },
          {
            B: 'Is the following present?',
            list: [ 'Person is unconscious and not breathing' ],
            true: 'Call ambulance and begin CPR'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Difficulty breathing', 'Blue lips or face' ],
            true: 'Call ambulance'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Foreign body aspirated into lungs', 'Coughing up blood or severe pain after dislodging foreign body from throat', 'Unable to remove foreign object from throat and no other symptoms' ],
            true: 'Seek emergency care now'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Able to speak and cough', 'No difficulty breathing', 'Frequent episodes of choking on saliva, foods, or fluids' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'For frequent choking, eat slowly, taking smaller bites.', 'If there is a sensation that a fish bone is stuck in the throat, try washing down the bone with bread and milk.' ],
        reportToPCP: [ 'Fish bone in throat and persistent scratchy throat > 2 hours', 'Signs of infection: persistent sore throat, fever, drainage', 'Difficulty swallowing', 'No improvement or condition worsens' ],
        seekEmergencyCare: [ ' Difficulty breathing', 'Unable to swallow saliva or fluids', 'Coughing up blood or severe pain after dislodging foreign body from the throat' ]
      },
      'Common Cold Symptoms': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Runny or Stuffy Nose', 'Sore Throat', 'Fever', 'Cough', 'Headache', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Asthma (49); Avian Influenza (Bird Flu) Exposure (52); Breathing Problems (101); Chest Pain (118); Congestion (145); Cough (163); Earache (200); Fever, Adult (241), Child (244); Hay Fever Problems (300); Severe Acute Respiratory Syndrome (SARS) (536); Sore Throat (567); Swine Flu (H1N1 Virus) Exposure (598); West Nile Virus (648); Wheezing (652)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is there difficulty breathing for reasons other than nasal congestion?',
            list: [ null ],
            true: 'Go to Breathing Problems protocol (101)'
          },
          {
            B: 'Is chest pain present unrelated to deep breathing or coughing?',
            list: [ null ],
            true: 'Got to Chest Pain protocol (118)'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Signs of dehydration:' = [ 'decreased urine', 'sunken eyes', 'pinched skin does not spring back', 'excessive thirst or dry mouth', 'crying without tears' ], 'Fever and neck pain bending head forward', 'Altered mental status, change in behavior or responsiveness', 'Immunosuppressed, age > 60 years, history of diabetes or sickle cell anemia, or bedbound with temperature > 101°F (38.3°C)', 'Infant < 3 months with temperature > 100.4°F (38.0°C)', 'Child with temperature > 105°F (40.6°C)', 'Adult with temperature > 103°F (39.4°C)', 'Fever and child appears very ill', 'Change in child’s breathing pattern: labored, noisy, wheezing, or chest retractions > 30 minutes' ],
            true: 'Seek emergency care now'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Sore throat or fever > 2 days', 'Wheezing and age < 4 years', 'Persistent wheezing unrelieved by home care measures', 'Ear pain or drainage', 'Sinus pain > 24 hours', 'Fever and history of asthma, cancer, chronic obstructive pulmonary disease, CHF, diabetes, heart disease, or renal disease', 'Honey-colored crusts in nostril or ear canal or around the mouth', 'Fever and age > 65 years', 'Green, brown, or yellow sputum or nasal discharge > 7 days and condition worsening' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Green, brown, or yellow sputum or nasal discharge < 7 days', 'Blood streaks in sputum', 'History of asthma, cancer, chronic obstructive pulmonary disease, CHF, diabetes, heart disease, or renal disease', 'Yellow eye drainage' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Do not give cold or cough medications to a child < 6 years old.', 'Take pain reliever of choice for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rest.', 'Drink 6 to 8 glasses of liquids daily, especially warm liquids, such as tea with lemon and honey. Do not give honey to a child < 1 year old.', 'Take decongestant of choice for congestion (unless there is a history of hypertension or the child < 6 years old).', 'Take expectorant of choice for cough. For child > 1 year of age, give 1/2 tsp lemon juice.', 'Suction secretions from infant’s nose with soft rubber suction bulb.', 'Use saline nose drops as needed for nasal congestion. (For homemade saline nasal drops, add 1/4 tsp regular salt to 1/2 cup warm water.) Place three drops in each nostril and wait 1 minute, then attempt to blow nose or suction with a soft rubber suction bulb.', 'Apply petroleum jelly to nasal opening to protect from irritation.', 'Use a vaporizer or humidifier to keep air moist, especially at night, and change the water daily.', 'If the throat is sore, gargle several times a day with warm water. Use frozen cough drops or hard candy, or sip warm chicken broth for additional relief if age > 4 years.', 'Use water to rinse red eyes and wipe with moistened cotton balls. Discard cotton ball after use in each eye.', 'Clear nose of child before breast- or bottle-feeding.', 'Remember that colds are very contagious and have an incubation period of 2 to 5 days. Use good hygiene, wash hands, dispose of used tissues, and cover mouth when sneezing or coughing.', 'Avoid smoking and exposure to second-hand smoke.' ],
        reportToPCP: [ 'Persistent fever > 3 days or temperature of 105°F (40.6°C)', 'Nasal discharge > 10 days', 'Persistent earache, sinus pain, or yellow eye drainage', 'Formation of honey-colored crusts under nostrils', 'Productive cough or fever', 'Condition persists or worsens' ],
        seekEmergencyCare: [ ' Difficulty breathing for reasons other than nasal congestion', 'Severe chest pain' ]
      },
      'Congestion': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Prior Treatment', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Asthma (49)', 'Breathing Problems (101)', 'Chest Pain (118)', 'Common Cold Symptoms (138)', 'Congestive Heart Failure (149)', 'Cough (163)', 'Earache, Drainage (200)', 'Fever, Adult (241), Child (244)', 'Hay Fever Problems (300)', 'Influenza (374)', 'Severe Acute Respiratory Syndrome (SARS) (536)', 'Sore Throat (567)', 'Swine Flu (H1N1 Virus) Exposure (598)', 'Wheezing (652)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is there difficulty breathing for reasons other than nasal congestion?',
            list: [ null ],
            true: 'Go to Breathing Problems protocol (101)'
          },
          {
            B: 'Is chest pain present?',
            list: [ null ],
            true: 'Go to Chest Pain protocol (118)'
          },
          {
            C: 'Is wheezing present?',
            list: [ null ],
            true: 'Go to Wheezing protocol (652)'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Fever > 101°F (38.3°C) and age > 60 years, bedridden, or weakened immune system', 'Fever > 100.4°F (38.0°C) and age < 3 months', 'Adult with fever > 103°F (39.4°C)', 'Child or elderly person appears very ill', 'Young child with signs of dehydration:', 'sunken eyes or fontanel', 'pinched skin that does not spring back', 'infant cries without tears', 'Child with severe pain, swelling, or redness of the upper part of the face' ],
            true: 'Seek emergency care now'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Several signs of dehydration:' = [ 'infrequent urination', 'dark yellow urine', 'sunken eyes', 'pinched skin that does not spring back', 'excessive thirst', 'dry mouth or mucous membranes' ], 'Severe pain, swelling, or redness of the upper part of the face' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            F: 'Are any of the following present?',
            list: [ 'Sore throat or fever > 2 days', 'Persistent fever > 100.4°F (38.0°C) > 3 days', 'Weakness and listlessness', 'Wheezing in a child younger than 4 years', 'Ear pain or drainage', 'History of asthma, cancer, chronic obstructive pulmonary disease, CHF, diabetes, heart disease, renal disease, or weakened immune system', 'Adult with green, brown, or yellow sputum or nasal discharge > 72 hours', 'Child with green, brown, or yellow sputum or nasal discharge > 7 days and condition worsening', 'Persistent pain > 24 hours after home care' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            G: 'Are any of the following present?',
            list: [ 'Blood streaks in sputum', 'Green, brown, or yellow sputum or nasal discharge < 72 hours', 'Persistent sinus congestion > 7 days after home care' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Do not give cold or cough medications to a child <6 years old.', 'Take your usual pain reliever (acetaminophen, ibuprofen) for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age <20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rest and drink 6 to 8 glasses of water a day. Warm liquids, such as tea with lemon and honey, are also soothing. Do not give honey to a child <1 year old.', 'Take OTC decongestants (ask the pharmacist for product suggestions) for congestion. Follow the instructions on the label. (Many decongestants are contraindicated if there is a history of hypertension, asthma, heart disease, glaucoma, or enlarged prostate.) Try a vaporizer, a humidifier, or a hot steamy shower and saline nose drops first; if no relief occurs, try decongestants.', 'For sinus pain, inhale the vapor of peppermint tea. Peppermint has anti- inflammatory compounds and pain relievers like menthol that relax constricted sinuses.', 'Take an expectorant (ask your pharmacist for product suggestions) for cough. Follow the instructions on the label.', 'Try antihistamine if congestion is due to allergy.', 'Use saline nose drops as needed for nasal congestion. (For homemade saline nasal drops, add 1/4 tsp of regular salt to 1/2 cup of warm water.) Blow each nostril separately.', 'Use a vaporizer or humidifier to keep the air moist, especially at night, and change the water daily.', 'If the throat is sore, gargle several times a day with warm water. Use frozen cough drops for additional relief.', 'Remember that infants <3 months old often have congestion and wheezing. Use saline nose drops and a humidifier to reduce congestion. Suction secretions from the infant’s nose with a soft rubber suction bulb.', 'Apply petroleum jelly to the nasal opening to protect it from irritation.', 'Clear the child’s nose before breast- or bottle-feeding.', 'Remember, colds are contagious; use good hygiene, wash hands, and dispose of used tissues. Cover the mouth with a tissue or inside the elbow sleeve when sneezing or coughing.', 'Avoid smoking or exposure to second-hand smoke.' ],
        reportToPCP: [ 'Persistent temperature > 101°F (38.3°C) and age > 4 months', 'Sore throat > 2 days', 'Green or yellow sputum', 'Persistent earache, sinus pain, or yellow eye drainage', 'Chest pain', 'Severe pain, swelling, or redness of the upper part of the face', 'Difficulty breathing', 'Fever > 100.4°F (38.0°C) and age < 3 months' ],
        seekEmergencyCare: [ 'Chest pain unrelated to coughing or deep breathing' ,'Difficulty breathing for reasons other than congestion' ,'Young child with sign of dehydration' ]
      },
      'Congestive Heart Failure': {
        keyQuestions: [ ' Name', 'Age', 'Onset', 'Under Treatment for CHF', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Ankle Problems (34)', 'Breathing Problems (101)', 'Chest Pain (118)', 'Cough (163)', 'Swelling (595)', 'Weakness (645)', 'Wheezing (652).' ],
        nurseAlert: 'Use this protocol only if previously diagnosed with CHF and currently under treatment for CHF.',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Sudden onset of severe difficult breathing', 'Chest pain or pressure', 'Altered mental status', 'Dusky or blue lips, tongue, or fingernail beds', 'Pale or gray face', 'Unable to speak more than 2- to 3-word sentences due to shortness of breath', 'Extreme exhaustion', 'Frothy pink or copious white sputum', 'Feeling of suffocation' ],
            true: 'Call ambulance or Seek emergency care now'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Sweating', 'Increased anxiety', 'Gradual increase in shortness of breath when lying flat or with activity', 'Shortness of breath with exertion', 'Speaking in partial sentences', 'Upper respiratory infection with fever and cough', 'Sudden weight gain 3–4 pounds in 1–4 days', 'Sudden increased swelling in legs, feet, or abdomen' ],
            true: 'Seek medical care immediately'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Difficulty sleeping', 'Increased ankle swelling', 'Increasing fatigue or weakness', 'Frequent dry hacking cough', 'Weight gain > 3 pounds in 1 day', 'Increased wheezing' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ ' Congestion, sneezing, cough, and no fever', 'Caregiver concerned and no other symptoms', 'Intermittent ankle swelling' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Take medications as prescribed.', 'Keep appointments with PCP and laboratory testing.', 'Weigh daily before breakfast and after toileting. Keep a record and take it to appointments.', 'Follow low-salt diet as instructed by health-care provider.', 'Pace activities. Slow down if activity causes increased difficulty breathing.', 'Avoid alcohol and smoking.' ],
        reportToPCP: [ 'Increased difficulty breathing, wheezing, coughing, or fatigue', 'Difficulty sleeping due to breathing problems or increased urination', '>3 pounds weight gain in any 1 day', 'Worsening ankle swelling', 'Condition worsens or no improvement' ],
        seekEmergencyCare: [ 'Sudden onset of severe difficulty breathing', 'Chest pain or pressure', 'Altered mental status', 'Dusky or blue lips, tongue, face, or fingernail beds', 'Inability to speak', 'Extreme exhaustion', 'Frothy pink or copious white sputum', 'Feeling of suffocation' ]
      },
      'Cough': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Prior Treatment', 'Related Symptoms', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Asthma (49); Breathing Problems (101)', 'Chest Pain (118)', 'Choking (130)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Congestive Heart Failure (149)', 'Foreign Body, Inhaled (263)', 'Influenza (374)', 'Pertussis (442)', 'Severe Acute Respiratory Syndrome (SARS) (536)', 'Sore Throat (567)', 'Wheezing (652)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is coughing caused by choking on a foreign body, food, or vomit?',
            list: [ null ],
            true: 'Go to Choking protocol (130)'
          },
          {
            B: 'For reasons other than nasal congestion, is the following present?',
            list: [ 'Sudden shortness of breath, rapid breathing, or wheezing' ],
            true: 'Go to Breathing problems protocol (101)'
          },
          {
            C: 'Is chest pain present?',
            list: [ null ],
            true: 'Go to Chest Pain protocol (118)'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Blue lips or tongue', 'Feeling of suffocation', 'Frothy pink sputum', 'Difficulty breathing and inability to speak', 'Difficulty breathing after smoke, flame, or fume inhalation', 'Sudden onset after exposure to something that previously caused a significant reaction (sting, medication, plant, chemical, food, or animal)' ],
            true: 'Call ambulance or Seek Emergency Care Now'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Cough is unrelated to cold symptoms and person has a history of:' = [ 'chest trauma > 48 hours', 'blood clots or recent long sedentary period', 'recent surgery', 'recent childbirth', 'recent heart attack', 'asthma and unresponsiveness to home care measures or medication' ], 'Coughing up blood', 'Child younger than 6 months with rapid breathing and persistent cough', 'Child appears very ill', 'Change in child’s breathing pattern: labored, noisy, wheezing, or chest retractions > 30 minutes' ],
            true: 'Seek medical care within 2 hours'
          },
          {
            F: 'Are any of the following present?',
            list: [ 'Persistent fever > 72 hours that is unresponsive to fever-reducing measures', 'Green or brown sputum > 72 hours', 'Child has a “barking” cough that is unrelieved by exposure to cool air, humidifier, or steam' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            G: 'Are any of the following present?',
            list: [ 'Cough caused by exercise', 'Persistent or worsening cough during a period of several weeks or months', 'Intermittent mild chest discomfort with deep productive coughing', 'Child with temperature > 101°F (38.3°C) for > 24 hours', 'Cough with weight loss' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ ' Drink 6 to 8 glasses of water daily.', 'Warm mist may help improve conditions. Breathe through a warm wet washcloth placed over the mouth and nose or sit in a steam-filled bathroom for 20 to 30 minutes.', 'Elevate head of bed to reduce coughing at night.', 'For children younger than 1 year, give 1/2 tsp lemon mixed with 1/2 tsp corn syrup to soothe cough.', 'Give older children and adults 1/2 tsp lemon mixed with 1/2 tsp honey or corn syrup. (DO NOT give honey to a child < 1 year.)', 'Drink warm lemonade, apple cider, or tea to help soothe cough.', 'Avoid irritants such as smoking, smog, and chemicals.', 'Turn down the heat, open the windows, or go out into cooler air to help suppress cough.', 'Take cough suppressants (ask your pharmacist for product suggestions) if cough is interfering with activity, causing chest pain or vomiting, or interrupting sleep at night. Do not give cough suppressants to a child < 1 year. Follow instructions on the label.', 'If congested, avoid milk products.', 'Take OTC medications as needed, being sure to follow instructions on the label: For a wet cough, use a decongestant; for a dry cough, use an expectorant during the day and suppressant at night; for an allergy, use an antihistamine or decongestant. Ask your pharmacist for product suggestions.' ],
        reportToPCP: [ 'No improvement or condition worsens', 'Fever for > 72 hours', 'Green, brown, or gray sputum develops and lasts > 72 hours', 'Coughing up blood (more than streaks or flecks)' ],
        seekEmergencyCare: [ 'Blue lips or tongue', 'Feeling of suffocation', 'Frothy pink sputum', 'Difficulty breathing and inability to speak' ]
      },
      'Croup': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Description of Cough', 'Prior Treatment', 'Medications', 'Associated Symptoms', 'History' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Congestion (145)', 'Cough (163)', 'Fever, Adult (241), Child (244)', 'Influenza (374)', 'Pertussis (442)', 'Sore Throat (567)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Drooling, difficulty swallowing, and child looks ill', 'Lips blue or dusky', 'Severe difficulty breathing', 'Chest caves in when breathing' ],
            true: 'Call ambulance'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Crowing sound when breathing in that does not clear after 20 minutes of steam, or more than three episodes during the last 24 hours', 'Child appears very ill' ],
            true: 'Seek emergency care now'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'History of pneumonia or other lung problems', 'History of asthma and no improvement after home breathing treatment and usual bronchodilator' ],
            true: 'Seek medical care within 2 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Condition worsens when lying down', 'Condition interferes with sleep', 'Temperature > 104°F (40°C) ' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Barking cough > 5 days', 'Cough worse at night', 'Barking cough heard during daytime hours' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Warm mist may help improve condition: Breathe through a warm wet washcloth placed over the mouth and nose or sit in a steam-filled bathroom for 20 to 30 minutes.', 'Continuous cool mist may help. Use a cool-mist humidifier or go out into the cool night air.', 'Drink warm clear fluids to soothe cough.', 'Use usual medication for fever (children’s Motrin, ibuprofen, children’s Tylenol, acetaminophen). Do not give aspirin to a child. Avoid aspirinlike products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
        reportToPCP: [ 'No improvement or condition worsens', 'Difficulty breathing', 'Temperature > 104°F (40°C)', 'Condition persists in child with asthma after home breathing treatment' ],
        seekEmergencyCare: [ 'Drooling, difficulty swallowing, and child looks ill', 'Lips turn blue or dusky', 'Severe difficulty breathing', 'Child appears very ill', 'Chest caves in with breathing', 'Crowing sound that does not clear after 20 minutes of home care measures or more than three episodes in a 24-hour period' ]
      },
      'Drowning (Near Drowning)': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'History', 'Water Source and Temperature (if known)' ],
        otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Back/Neck Injury (56)', 'Breathing Problems (101)', 'Choking (130)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Victim experienced near drowning, and are any of the following present?',
            list: [ 'Unresponsiveness', 'Suspected injury', 'Vomiting', 'Respiratory distress', 'Difficulty breathing', 'Lips or face blue' ],
            true: 'Seek emergency care now'
          },
          {
            B: 'Did a near drowning occur?',
            list: [ 'Victim was submerged under water but now is breathing and responsive' ],
            true: 'Seek medical care within 2 to 4 hours and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'For suspected neck injury, do not move victim unless absolutely necessary. Support the head and neck and allow to float in water. If necessary to move, support head and neck and torso as one unit.', 'If vomiting occurs, turn victim to side and clear mouth.', 'Do not press on abdomen, or vomiting may occur.', 'Keep victim warm.' ],
        reportToPCP: [ 'No improvement or condition worsens' ],
        seekEmergencyCare: [ null ]
      },
      'Facial Problems': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
        otherProtocolstoConsider: [ 'Congestion (145)', 'Facial Skin Problems (225)', 'Mouth Problems (410)', 'Numbness and Tingling (433)', 'Piercing Problems (446)', 'Rash, Adult (501), Child (505)', 'Sinus Problems (556)', 'Shingles: Suspected or Exposure (545)', 'Skin Lesions: Lumps, Bumps, and Sores (559)', 'Tattoo Problems (602)', 'Toothache (611)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'History of glaucoma', 'Sudden onset of facial drooping on one side' ],
            true: 'Seek emergency care now'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Sudden severe pain interferes with activity', 'Facial paralysis', 'Pain, swelling, redness, warmth, drainage, or fever' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Increased pain in afternoon or when bending over', 'Green, brown, or yellow nasal discharge', 'Pain along ridge between nose and lower eyelid', 'Temperature > 101°F (38.3°C)', 'Persistent swelling', 'Facial rash, blisters, or lesions' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Recent red, blistered facial rash', 'Pain, swelling, or bruising after blow to the face', 'History of recent cold', 'Pain follows ingestion of ice-cold foods or fluids', 'Nose and eye drainage' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Alternate cold and warm compresses to forehead and cheeks 1 minute each for 10 minutes, 4 times a day. A sock filled with rice and heated in the microwave works well.', 'Increase fluid intake.', 'Apply ice pack to face injury for 10 to 20 minutes, 4 times a day for first 24 hours to help reduce swelling.', 'Sit in a steamy bathroom for 20 minutes several times a day to promote sinus drainage.', 'Take OTC decongestants as needed for congestion and follow instructions on the label. Ask your pharmacist for product suggestions.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort and fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
        reportToPCP: [ 'Persistent pain or condition worsens', 'Temperature > 101°F (38.3°C)', 'Signs of infection: pain, swelling, redness, warmth, drainage, or red streaks', 'Persistent nasal discharge', 'Change in vision, hearing, smell, or taste' ],
        seekEmergencyCare: [ 'Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'Sudden facial drooping on one side of the face' ]
      },
      'Foreign Body, Inhaled': {
        keyQuestions: [ ' Name', 'Age', 'Onset', 'Object Inhaled', 'History', 'Medications' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Choking (130)', 'Cough (163)', 'Foreign Body, Swallowing of (274)', 'Piercing Problems (446)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Choking and unable to speak, cough, or breathe', 'Unconscious person who is not breathing' ],
            true: 'Call ambulance and begin rescue breathing'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Difficulty breathing', 'Lips or face turning blue', 'Inability to cry or speak', 'Suicide attempt' ],
            true: 'Call ambulance'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Aspirated foreign body into the lungs', 'Coughing up blood or severe pain after dislodging foreign body from the throat', 'Unable to remove foreign object from throat but no other symptoms', 'Feeling of suffocation', 'Drooling', 'Speaking in short words', 'Unable to swallow saliva or fluids' ],
            true: 'Seek emergency care now'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Fever', 'Speaking in partial sentences', 'Intermittent cough or wheezing after inhaling a foreign object, aerosol, or smoke' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ ' Able to speak and cough', 'No difficulty breathing', 'Frequent episodes of choking on saliva, foods, or fluids', 'Speaking in full sentences' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'For frequent choking, eat slowly, taking smaller bites.', 'If there is a sensation that a fish bone is stuck in the throat, try washing down the bone with bread and milk.' ],
        reportToPCP: [ 'Fish or chicken bone in throat and persistent scratchy throat > 2 hours', 'Coughing up blood', 'Signs of infection: persistent sore throat, fever, or drainage', 'Difficulty swallowing', 'No improvement or condition worsens' ],
        seekEmergencyCare: [ ' Difficulty breathing, shortness of breath, or wheezing', 'Unable to swallow saliva or fluids', 'Feeling of suffocation' ]
      },
      'Hay Fever Problems': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'History of Known Allergies', 'Medications', 'History. If no history of hay fever, see most severe symptom protocol' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Cough (163)', 'Earache, Drainage (200)', 'Sinus Problems (556)', 'Sore Throat (567)', 'Wheezing (652)' ],
        nurseAlert: 'Use this protocol only if previously diagnosed with hay fever.',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is there difficulty breathing for reasons other than nasal congestion?',
            list: [ null ],
            true: 'Go to Breathing Problems protocol (101)'
          },
          {
            B: 'Is chest pain present?',
            list: [ null ],
            true: 'Go to Chest Pain protocol (118)'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Wheezing in a client younger than 4 years', 'Persistent wheezing that is unresponsive to home care measures' ],
            true: 'Go to Wheezing protocol (652)'
          },
          {
            D: 'In addition to clear nasal discharge, sniffing, or sneezing, are any of the following present?',
            list: [ 'Fever', 'Headache and muscle aches', 'Green, brown, or yellow nasal discharge or sputum for > 24 hours', 'Ear pain or drainage', 'Persistent uncontrollable coughing' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Symptoms persist, even when client avoids triggers', 'Symptoms interfere with daily activities', 'Intermittent coughing', 'Nasal itching', 'Red, itchy, or watery eyes', 'Sore throat', 'Clear nasal drainage' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Take OTC or prescription antihistamines of choice. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid use of nasal sprays unless prescribed by PCP. If sprays are used, do not use > 5 days.', 'Shower and wash hair at night and after having exposure to pollen, dust, or known irritants.', 'When pollen count is high, particularly in the morning, stay indoors with the doors and windows closed.', 'For itchy eyes, apply cold compresses to the eyelids.', 'Avoid pollen and other irritants that worsen the problem.' ],
        reportToPCP: [ 'Persistent nasal discharge, sneezing, or sniffing that is unresponsive to medication' ,'Fever' ,'Sinus pressure or pain' ,'Green, brown, or yellow nasal discharge or sputum' ,'Earache' ,'Uncontrolled coughing' ,'Symptoms interfere with daily activity' ,'Persistent wheezing or coughing that is unresponsive to home care measures' ],
        seekEmergencyCare: [ 'Chest pain', 'Difficulty breathing for reasons other than nasal congestion' ]
      },
      'Hoarseness': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Contributing Factors', 'Medications', 'History' ],
        otherProtocolstoConsider: [ ' Allergic Reaction (26)', 'Breathing Problems (101)', 'Cough (163)', 'Croup (166)', 'Hay Fever Problems (300)', 'Hives (335)', 'Foreign Body, Inhaled (263)', 'Sore Throat (567).' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Sudden onset of hoarseness, and are any of the following present?',
            list: [ 'Sore throat, drooling, and difficulty breathing', 'Sensation of swelling tongue or throat', 'Recent trauma to neck', 'Speaking in short three-word sentences' ],
            true: 'Seek emergency care now'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Sudden onset of swelling in face', 'Speaking in partial sentences' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ ' High fever and feels or looks ill', 'Persistent hoarseness >1 week', 'History of tobacco use, recent weight loss, and decreased appetite', 'Dry skin or hair, increased sensitivity to cold, increased fatigue, or unexplained weight gain' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Recent sore throat, cough, cold, or fever', 'Frequent use of voice in work (such as teacher or singer)', 'Heavy use of tobacco or alcohol', 'Recently used voice more than usual (yelling, cheering, singing)', 'Speaking in complete sentences' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Avoid tobacco or alcohol.', 'Rest voice as much as possible.', 'Drink plenty of fluids.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) as tolerated for discomfort or fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Use honey or throat lozenges for throat discomfort or cough.' ],
        reportToPCP: [ 'Condition persists > 1 week or worsens', 'High fever and appears ill' ],
        seekEmergencyCare: [ 'Sore throat, drooling, and difficulty breathing', 'Sensation of swelling tongue or throat', 'Speaking in short three-word sentences' ]
      },
      'Hyperventilation': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Associated Symptoms' ],
        otherProtocolstoConsider: [ 'Anxiety (37)', 'Breathing Problems (101)', 'Chest Pain (118)', 'Numbness and Tingling (433)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is chest pain present?',
            list: [ null ],
            true: 'See Chest Pain protocol (118)'
          },
          {
            B: 'In addition to breathing rapidly, are any of the following present?',
            list: [ ' Blue lips or fingernails', 'Unable to talk', 'Must sit up to breathe' ],
            true: 'See Breathing Problems protocol (101)'
          },
          {
            C: 'In addition to rapid breathing, are any of the following present?',
            list: [ ' Severe pain', 'High fever unresponsive to fever-reducing measures', 'Abnormal drowsiness' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            D: 'In addition to rapid deep breathing, are any of the following present?',
            list: [ ' Numbness and tingling around the face, mouth, fingers, or toes', 'Weakness', 'Feeling faint', 'Twitching in the hands and feet', 'Anxiety or emotional upset', 'History or prior episodes of similar symptoms' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Sit down and focus on slowing breathing, one breath every 5 seconds.', 'Cover mouth and nose with a paper bag and breathe in and out 10 times.', 'If no improvement, continue breathing in the bag for 5 to 15 minutes.', 'Breathe without the bag for a few minutes.', 'Repeat breathing with and without the bag until condition improves.' ],
        reportToPCP: [ 'No improvement or condition worsens', 'Sudden fever occurs during an attack', 'Frequent attacks' ],
        seekEmergencyCare: [ ' Fainting', 'Seizure', 'Blue lips or fingernails', 'Chest pain' ]
      },
      'Influenza': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Symptoms', 'Known Exposure or Community Outbreak', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Avian Influenza (“Bird Flu”) (52)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Cough (163)', 'Fever, Adult (241), Child (244)', 'Headache (303)', 'Swine Flu (H1N1 Virus) Exposure (598)', 'Sore Throat (567)', 'West Nile Virus (648)' ],
        nurseAlert: 'Use this protocol if exposure to influenza is known or suspected, there is a community outbreak, or previously diagnosed with Influenza.',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Altered mental status', 'Difficulty breathing for reasons other than congestion', 'Fever > 104.9°F (40.5°C)', 'Flat purple or dark red spots on face or trunk and stiff or painful neck', 'Severe headache', 'Skin or lips turning blue', 'New onset of drooling or unable to swallow', 'Age < 6 weeks' ],
            true: 'Seek emergency care now'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Stiff or painful neck', 'Fever > 103.1°F (39.5°C)', 'Fever, and child or older adult appears very ill, lethargic, or very irritable', 'Signs of dehydration' ],
            true: 'Seek medical care immediately'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Known exposure and any of the following: fatigue, fever < 103.1°F (39.5°C), dry cough, sore throat, GI symptoms, runny nose or congestion, muscle aches', 'History of CHF, immunosuppression, 6 weeks to 23 months of age, age > 65 years, pregnancy, long-term care resident, asthma, COPD, metabolic disorders' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Mild symptoms', 'No symptoms but parent or person concerned' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ ' Wash hands frequently with soap and water or alcohol-based hand rubs.', 'Reinforce that influenza is highly contagious. Maintain good respiratory etiquette; cover mouth and nose with a tissue when coughing or sneezing.', 'Avoid contact with sick individuals.', 'If sick, avoid contact with other people. If coughing and sneezing, wear a surgical mask during close contact with others to prevent the spread of droplets. Change the mask if it becomes soiled or moist.', 'Get plenty of rest and drink plenty of fluids.', 'Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Give antivirals within 48 hours of symptom onset.' ],
        reportToPCP: [ ' Stiff or painful neck', 'Fever > 103.1°F (39.5°C)', 'Fever, and child or older adult appears very ill, lethargic, or very irritable', 'Signs of dehydration' ],
        seekEmergencyCare: [ ' Altered mental status', 'Difficulty breathing', 'Fever > 104.9°F (40.5°C)', 'Flat purple or dark red spots on face or trunk and stiff or painful neck', 'Severe headache', 'Skin or lips turning blue', 'New onset of drooling or unable to swallow' ]
      },
      'Sleep Apnea, Adult': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Breathing Problems (101)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Person not breathing', 'Skin turning blue' ],
            true: 'Call ambulance and Start CPR'
          },
          {
            B: 'While sleeping, did the following occur?',
            list: [ 'Lapse in breathing for several minutes', 'Skin turned gray or blue and is normal color now', 'Abnormal breathing after the episode', 'Rescue breathing was necessary' ],
            true: 'Seek medical care within 2 hours'
          },
          {
            C: 'While sleeping, did the following occur?',
            list: [ 'Lapse in breathing < 2 minutes', 'No change in skin color', 'Breathing normally after the episode', 'Rescue breathing was not necessary', 'Cycles of sleep, choking, sudden wakening, drowsiness, and sleep Follow Home Care Instructions', 'Persistent drowsiness and episodes of falling asleep during the day', 'Decreased ability to function or depression caused by lack of sleep' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Try to remain calm.', 'Eliminate as many contributing risk factors as possible: stress, anxiety, depression, obesity, smoking, and drug or alcohol abuse.', 'Obtain CPR training. Rapid identification of prolonged apnea and prompt CPR can help to prevent death or serious problems related to a lack of oxygen to the brain.', 'If apnea occurs only when sleeping on the back, sleep on the side or stomach. Use pillows for support. Consider attaching an object to the back of sleepwear to encourage other sleep positions.' ],
        reportToPCP: [ 'Persistent episodes of apnea' ],
        seekEmergencyCare: [ 'Prolonged period of not breathing', 'Skin turning blue', 'CPR in progress' ]
      },
      'Sleep Apnea, Infant': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
        otherProtocolstoConsider: [ 'Newborn Problems (423)', 'Spitting Up, Infant (573)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ 'Infant not breathing', 'Skin turning blue' ],
            true: 'Call ambulance and Start CPR'
          },
          {
            B: 'While infant was sleeping, did the following occur?',
            list: [ 'Lapse in breathing for 1 minute', 'Skin turned gray or blue but is normal color now', 'Abnormal breathing after the episode', 'Rescue breathing was necessary' ],
            true: 'Seek medical care immediately'
          },
          {
            C: 'While infant was sleeping, did the following occur?',
            list: [ 'Lapse in breathing < 1 minute', 'No change in skin color', 'Infant breathing normally after episode', 'Rescue breathing was not necessary' ],
            true: 'Seek medical care within 24 hours'
          },
        ],
        homeCareInstructions: [ 'Provide reassurance. Some infants have a pause in breathing of < 15 seconds after several rapid respirations.', 'Reinforce importance of placing child on back for sleep.', 'Discuss use of a respiration monitor with PCP.', 'Obtain CPR training. Rapid identification of apnea and prompt CPR can successfully revive an infant without serious problems.' ],
        reportToPCP: [ 'Persistent episodes of apnea' ],
        seekEmergencyCare: [ 'Infant not breathing', 'Skin turning blue', 'CPR in progress' ]
      },
      'Wheezing': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History of Intubation', 'Hospitalizations', 'History' ],
        otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Asthma (49)', 'Breathing Problems (101)', 'Congestion (145)', 'Congestive Heart Failure (149)', 'Cough (163)', 'Croup (166)', 'Hay Fever Problems (300)' ],
        nurseAlert: 'If known respiratory problems and prescribed inhalers, use O2 or peak flow meters (to measure how well air is moving out of the lungs). Assess baseline functioning, O2 saturation level, and % Oxygen delivered and method. Peak flow values are divided into three zones:',
        alertBullets: [ 'Green: 80% of baseline or higher (mild attack)', 'Yellow: 50% to 80% of baseline (moderate attack)', 'Red: <50% of baseline (severe attack)' ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ ' Severe respiratory distress', 'Inability to speak', 'Chest retractions', 'Aspiration of foreign body', 'Blue lips or face', 'Severe chest pain', 'Sudden-onset wheezing after medication or exposure to known allergen', 'Peak flow rate < 50% of baseline (if asthmatic)' ],
            true: 'Call ambulance'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Unresponsive to medication treatments', 'Unresponsive to home care measures', 'Must sit up to breathe', 'Wheezing similar to prior episodes that required hospitalization or injections', 'History of CHF, cardiac disease, pulmonary embolus, or blood clot in leg', 'Speaking in partial sentences', 'Peak flow rate 50%–80% of baseline (if asthmatic)' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Peak flow rate > 80% of baseline (if asthmatic)', 'Green, yellow, or rust-colored sputum', 'Infant, elderly, or immunosuppressed' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'First wheezing episode that resolves in short period of time', 'Fever', 'Speaking in full sentences' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ ' Take medication as directed by PCP.', 'Use vaporizer with cool mist.', 'Identify cause and avoid irritant.' ],
        reportToPCP: [ 'Condition worsens', 'No improvement with medication' ],
        seekEmergencyCare: [ 'Lips or face turn blue', 'Fighting for air', 'Decreased level of consciousness', 'Inability to speak or speaking in short words', 'Severe chest pain', 'Peak flow rate < 50% of baseline (if asthmatic)' ]
      },
  },
  'Gastrointestinal Problems': {
      'Abdominal Pain, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Abdominal Pain, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Abdominal Pain: Causes and Characteristics (Appendix R)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Appetite Loss, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Appetite Loss, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Constipation': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diarrhea, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diarrhea, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Feeding Tube Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Food Allergy, Known or Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Food Poisoning, Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Rectum': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Swallowing of': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Gas/Belching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Gas/Flatulence': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Heartburn': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hemorrhoids': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hiccups': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Incontinence, Stool': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Indigestion': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ostomy Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pinworms': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rectal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rectal Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Stools, Abnormal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vomiting, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vomiting, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Genital/Obstetrics and Gynecological Problems': {
      'Breast-Feeding Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Breast Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Contraception, Emergency (EC)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Vagina': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Genital Lesions': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Genital Problems, Male': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Menstrual Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Postpartum Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Cold Symptoms': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Fetal Movement Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Hypertension': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Leaking Vaginal Fluid': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Nausea and Vomiting': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Suspected Labor': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Suspected Labor < 36 Weeks': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Urination Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Vaginal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scrotal Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexual Assault': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vaginal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vaginal Discharge/Pain/Itching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Urination Problems': {
      'Bed-Wetting': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Incontinence, Urine': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urinary Catheter/Nephrostomy Tube Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Difficult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Excessive': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Painful': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urine, Abnormal Color': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Limb (Arm/Leg) Problems': {
      'Ankle Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ankle Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Arm or Hand Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bone, Joint, and Tissue Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Cast/Splint Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Extremity Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Finger and Toe Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foot Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hand/Wrist Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hip Pain/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Joint Pain/Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Knee Pain/Swelling/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Leg Pain/Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Muscle Cramps': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shoulder Pain/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Skin Problems': {
      'Abrasions': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Allergic Reaction': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bedbug Exposure or Concerns': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bee Stings': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Animal/Human': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Insect': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Marine Animal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Snake': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Tick': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bruising': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Chemical': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Electrical': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Thermal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diaper Rash': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Facial Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Facial Skin Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Skin': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Frostbite': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Glands, Swollen or Tender': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hair Loss': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hives': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Itching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Jaundice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Laceration': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Lice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Piercing/Pocketing Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Puncture Wound': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rash, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rash, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scabies': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shingles: Suspected or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Skin Lesions: Lumps, Bumps, and Sores': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sunburn': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sweating, Excessive': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Tattoo Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Wound Care: Sutures or Staples': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Wound Healing and Infection': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Chronic and Infectious Diseases': {
      'Asthma': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Avian Influenza (“Bird Flu”) Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Blood/Body Fluid Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Chickenpox': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Communicable Diseases (Appendix M)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Congestive Heart Failure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diabetes Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ebola: Known or Suspected Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hepatitis': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'HIV Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hospice Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Impetigo': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Influenza': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Lice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Mumps': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pertussis (Whooping Cough)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Reye Syndrome, Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Roseola': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rubella (German Measles)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rubeola (Measles)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scabies': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Severe Acute Respiratory Syndrome (SARS)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD) (Appendix N)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sickle Cell Disease Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shingles: Suspected or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Swine Flu (H1N1 Virus) Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'West Nile Virus': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Behavioral Health Problems': {
      'Alcohol Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Anxiety': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Child Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Depression': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Domestic Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Overdose': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Substance Abuse, Use, or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Suicide Attempt, Threat': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'General Problems': {
    'Cold Exposure Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Dehydration': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Electric Injury': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Falls': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fatigue': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fever, Adult': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fever, Child': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Food Allergy, Known or Suspected': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Heat Exposure Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Immunization, Tetanus': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Immunization Reactions': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Postoperative Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Weakness': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
  },
  'Pediatric-Specific Problems': {
    'Abdominal Pain, Child': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Bed-Wetting': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Chickenpox': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Child Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Circumcision Care': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Croup': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Crying, Excessive, in Infants': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Diaper Rash': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Diarrhea, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Fever, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Newborn Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Rash, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Roseola': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Seizure, Febrile': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Sleep Apnea, Infant': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Spitting Up, Infant': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Teething': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Umbilical Cord Care': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Vomiting, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  }
};

/* let Appendix = []; */

alert("Please be aware that information has not been reviewed and may not be up to date. Use at own risk");

function createList(items) {
  const list = document.createElement('ul');
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  return list;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function toggleVisibility(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function createContent(data) {
  const container = document.getElementById('triage-list');
  for (const heading in data) {
    const headingElement = document.createElement('h2');
    headingElement.textContent = heading;
    headingElement.addEventListener('click', () => {
      toggleVisibility(container.querySelector('h3'));
      toggleVisibility(container.querySelector('p'));
    });
    container.appendChild(headingElement);
    for (const subHeading in data[heading]) {
      const subHeadingElement = document.createElement('h3');
      subHeadingElement.textContent = subHeading;
      subHeadingElement.style.display = 'none'; // Initially hide subheading content
      container.appendChild(subHeadingElement);
      const subData = data[heading][subHeading];
      for (const key in subData) {
        if (Array.isArray(subData[key])) {
          const listElement = createList(subData[key]);
          listElement.style.display = 'none'; // Initially hide list content
          container.appendChild(listElement);
        } else if (typeof subData[key] === 'string') {
          const paragraphElement = createParagraph(subData[key]);
          paragraphElement.style.display = 'none'; // Initially hide paragraph content
          container.appendChild(paragraphElement);
        }
      }
    }
  }
}

createContent(bodySystem);
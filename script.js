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
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'Pain Scale', 'Associated Symptoms', 'Date of Last Menstrual Period', 'Prior Medical History' ],
      otherProtocolstoConsider: [ 'Abdominal Swelling (17)', 'Constipation (152)', 'Diarrhea, Adult (185)', 'Food Poisoning, Suspected (254)', 'Menstrual Problems (407)', 'Rectal Bleeding (510)', 'Urination, Difficult (622)', 'Urination, Painful (626)', 'Vomiting, Adult (638)' ],
      nurseAlert: 'Many conditions can cause abdominal pain, and some can be potentially life threatening. Err on the side of caution when triaging callers with abdominal pain. Abdominal Pain: Causes and Characteristics: Appendix R (694) is provided to help the nurse gain a better understanding of the many conditions causing abdominal pain. It is NOT to be used to try and diagnose a caller’s condition.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Faint (unconsciousness) or unresponsiveness', 'Severe weakness and inability to stand', 'Cold, pale skin, or profuse sweating', 'Severe, sudden pain radiating to back or legs' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Light-headedness', 'Vomiting blood or dark coffee-grounds like emesis', 'New onset of rapidly worsening symptoms and age >', 'Bloody or black stools unrelated to hemorrhoids or iron supplements', 'Sudden abdominal and shoulder pain in a woman with menses > 4 weeks late', 'Age > 30, heavy smoker, high blood pressure, high cholesterol, or obesity', 'History of diabetes, heart disease, blood clotting problems, or CHF' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Rapidly increasing pain', 'Pregnancy', 'Unusually heavy vaginal bleeding and possibility of pregnancy', 'History of recent abdominal surgery, frequent falls, or injury to abdomen', 'RLQ pain with poor appetite, nausea and/or vomiting, or fever', 'Ingestion of plant, drug, or chemical', 'Temperature > 101°F (38.3°C) and age > 60 years, bedridden, or weakened immune system', 'Temperature > 103°F (39.4°C)', 'Severe nausea and vomiting', 'Persistent nausea and vomiting, and decreased oral intake and urination', 'Pain worsens with coughing' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'History of hepatitis or exposure', 'Continuous pain > 1 hour', 'Unexplained progressive abdominal swelling Go to E', 'Painful or difficult urination', 'Blood in urine', 'Pain interferes with activity', 'Age > 60 years', 'Nausea, vomiting, diarrhea > 24 hours' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Vaginal or urethral discharge', 'History of abdominal pain, and usual treatment is ineffective', 'Constipation', 'History of nervous stomach', 'Significant increase in stress level', 'Intermittent mild pain associated with an empty stomach, eating certain foods, or use of pain, antibiotic, or anti-inflammatory medications', 'Mild, infrequent diarrhea', 'Other family members ill' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rest.', 'Consume clear liquids (broth, tea, ginger ale, apple juice, flavored ice, gelatin) in frequent small amounts (sips) until vomiting or diarrhea subsides.', 'After 12 hours without vomiting or diarrhea, introduce a bland diet (rice, potatoes, bread, crackers, bananas, cereal).', 'Take medications as directed by the pharmacy. Some should be taken on an empty stomach and others with food. Avoid aspirin, ibuprofen, and naproxen. Do not take acetaminophen if liver disease is present. Follow the instructions on the label.', 'Apply heat (moist hot towel or heating pad) to the abdomen for cramping or discomfort, or take a warm bath.', 'For gas relief, try Maalox or Mylanta, and follow the instructions on the label. Ask the pharmacist for other suggestions.', 'Avoid alcohol, caffeine, and greasy or spicy foods.', 'If known GERD exists, encourage consumption of smaller, more frequent meals, and avoid spicy or greasy food, caffeine, and chocolate.', 'Try herbal teas such as peppermint or chamomile to soothe an upset stomach.' ],
      reportToPCP: [ ' Severe pain > 2 hours', 'Temperature > 101°F (38.3°C) and age > 60 years, bedridden, or weakened immune system', 'Temperature > 103°F (39.4°C)', 'Persistent vomiting or diarrhea and decreased oral intake or urination', 'Pain worsens with heat or activity' ],
      seekEmergencyCare: [ ' Unusually firm or hard abdomen', 'Persistent vomiting', 'Severe persistent pain', 'Fainting/light-headedness', 'Bloody or black stools or emesis' ]
    },
    'Abdominal Pain, Child': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'Pain Scale', 'Associated Symptoms', 'Prior History', 'Date of Last Menstrual Period' ],
      otherProtocolstoConsider: [ 'Abdominal Swelling (17)', 'Constipation (152)', 'Diarrhea, Child (188)', 'Food Poisoning, Suspected (254)', 'Menstrual Problems (407)', 'Urination, Difficult (622)', 'Urination, Painful (626)', 'Vomiting, Child (641)' ],
      nurseAlert: 'Many conditions can cause abdominal pain, and some can be potentially life threatening. Err on the side of caution when triaging callers with abdominal pain. Abdominal Pain: Causes and Characteristics: Appendix R (694) is provided to help the nurse gain a better understanding of the many conditions causing abdominal pain. It is NOT to be used to try and diagnose a caller’s condition.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Severe persistent pain > 2 hours', 'Rapidly increasing pain', 'RLQ pain with poor appetite, nausea and/or vomiting, fever, grasping abdomen, walking bent over, screaming, grunting respirations, or lying with knees drawn toward chest', 'Unusually heavy vaginal bleeding and possibility of pregnancy', 'Ingestion of unknown chemical substance, plant, or medication', 'Recent abdominal trauma', 'Black, bloody, or jelly-like stools unrelated to hemorrhoids or iron supplements', 'Weight loss', 'Vomiting blood or dark coffee-grounds–like emesis', 'Weakness and inability to walk', 'Severe pain and swelling in testicle(s) or scrotum' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Severe nausea and vomiting', 'Continuous pain > 2 hours and unresponsive to home care', 'Unexplained progressive abdominal swelling', 'Painful or difficult urination', 'Age < 2 years and intermittent pain', 'Pain interferes with activity', 'Decreased urine output', 'Nausea, vomiting, or diarrhea > 24 hours and unresponsive to home care', 'Known hernia or hydrocele and pain or crying > 2 hours' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Vaginal or urethral discharge', 'History of abdominal pain, and usual treatment is ineffective', 'Significant increase in stress level', 'Blood in urine', 'Temperature > 101°F (38.3°C), cough, or weakness' ],
          true: 'Seek medical care within 24 to 48 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Constipation', 'History of a nervous stomach and increased stress level', 'Intermittent mild pain associated with an empty stomach, eating certain foods, or use of pain, antibiotic, or anti-inflammatory medications', 'Mild infrequent diarrhea', 'Other family members are ill NO Follow Home Care', 'Persistent sore throat > 24 hours' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rest.', 'Consume clear liquids (fruit juice diluted with ½ water, weak tea, broth, sports drinks, flavored ice, gelatin, clear soft drink) or bland diet (rice, potatoes, soda crackers, pretzels, dry toast, applesauce, bananas) for 12 to 24 hours. Recommend electrolyte/mineral supplement or other rehydrating fluid solution (such as Pedialyte) for small children or infants.', 'If diarrhea is present, avoid fruit juice or full-strength sports drinks.', 'Take medications as directed by the pharmacy. Some should be taken on an empty stomach and others with food. Avoid ibuprofen and other antiinflammatory medications. Do not give aspirin to a child. Avoid aspirinlike products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Apply a moist, hot towel or heating pad to the abdomen for cramping.' ],
      reportToPCP: [ 'Severe pain > 1 hour', 'Fever', 'Pain worsens with heat or activity' ],
      seekEmergencyCare: [ 'Unusually firm or hard abdomen', 'Persistent vomiting', 'Bloody or black stools or emesis', 'Weakness and inability to walk', 'Severe pain and swelling in testicle(s) or scrotum' ]
    },
    'Appetite Loss, Adult': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'Prior History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11)', 'Alcohol Problems (22)', 'Anxiety (37)', 'Depression (177)', 'Dizziness (192)', 'Fever, Adult (241)', 'Heart Rate Problems (317)', 'Substance Abuse, Use, or Exposure (581)', 'Vomiting, Adult (638)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Altered mental status', 'Fainting', 'Abdominal pain', 'Thoughts of suicide', 'Hallucinations (auditory, tactile, or visual)' ],
          true: 'Seek emergency care now, if abdominal pain, go to Abdominal Pain Adult protocol (11)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Palpitations', 'Fever > 101°F (38.4°C) and weakened immune system or advanced age increase in dizziness and heart rate with sitting or standing' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Sudden weight loss > 5–10 pounds', 'Lethargy', 'Yellowing of the skin or whites of the eyes', 'Fever > 101°F (38.4°C) and unresponsive to feverreducing measures', 'Sudden weight gain > 5 pounds', 'Inadequate fluid intake', 'Unexplained weight loss during a period of several weeks', 'Severe depression', 'Abrupt cessation of drugs (including prescription or OTC), alcohol, or caffeine' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Poor eating habits', 'Increased stress/anxiety', 'Recent onset of appetite loss', 'No other symptoms', 'Decrease in activity' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Eat a balanced meal.', 'Slowly increase amount of food after surgery or illness.', 'Exercise regularly.', 'May try liquid diet supplements (ensure). Ask your PCP or pharmacist for additional OTC liquid diet supplements.', 'Try to identify the cause of the appetite loss, and take appropriate action to address the problem (poorly fitting dentures, mouth sores, nausea, depression, swallowing difficulties, etc.)', 'Take usual medication for discomfort and fever. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'Nausea and vomiting', 'Failure to improve' ],
      seekEmergencyCare: [ 'Altered mental status', 'Fainting', 'Hallucinations', 'Thoughts of suicide', 'Known or suspected eating disorder, and persistent increase in dizziness and heart rate with sitting or standing' ]
    },
    'Appetite Loss, Child': {
      keyQuestions: [ 'Name, Age, Onset, Allergies, Weight, Medications, Prior History, Eating Disorder Treatment' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Child (14)', 'Altered Mental Status (29)', 'Anxiety (37)', 'Dehydration (173)', 'Depression (177)', 'Dizziness (192)', 'Fever, Child (244)', 'Heart Rate Problems (317)', 'Vomiting, Child (641)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Abdominal pain' ],
          true: 'Go to Abdominal Pain, Child protocol (14)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Altered mental status', 'Fainting', 'Vomiting, drowsiness, irritability, and headache or stiff or painful neck' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Child refuses to eat or drink and looks ill', 'Known or suspected eating disorder, and persistent increase in dizziness and heart rate with sitting or standing', 'Signs of dehydration:' = [ 'decreased urination', 'no urine for > 8 hours in child < 1 year of age', 'no urine for >12 hours in child > 1 year of age', 'crying without tears', 'sunken fontanels', 'excessive thirst, dry mouth' ] ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Unusual frequent urination or bed-wetting', 'Nausea at sight of food, vomiting, yellow skin, fever, fatigue', 'Skin persistently pale', 'Dark urine and pale stools', 'Persistent decrease in appetite, swollen glands, and fatigue', 'Poor weight gain', 'Sudden weight loss', 'Severe dieting or excessive exercise and distorted body image in a teenager', 'Rash or fever' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Poor eating habits', 'Increased stress/anxiety', 'Dry skin, brittle hair', 'Recent onset of appetite loss' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Encourage a balanced meal.', 'Do not force child to eat when sore throat makes swallowing difficult. Encourage consumption of ice cream, flavored ice, and cold fluids.', 'Avoid putting too much emphasis on food when child is ill.', 'Understand that it is normal for the child’s appetite to decrease around 2 years of age.', 'Slowly increase amount of food after surgery or illness.', 'Give acetaminophen for fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'Nausea and vomiting', 'Persistent appetite loss', 'Persistent weight loss' ],
      seekEmergencyCare: [ ' Altered mental status', 'Fainting', 'Vomiting, drowsiness, irritability, and headache or stiff or painful neck', 'Known or suspected eating disorder, and persistent increase in dizziness and heart rate with sitting or standing' ]
    },
    'Constipation': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Last Bowel Movement', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Abdominal Swelling (17)', 'Diarrhea, Adult (185), Child (188)', 'Foreign Body, Rectum (269)', 'Hemorrhoids (324)', 'Vomiting, Adult (638), Child (641)', 'Rectal Bleeding (510)', 'Rectal Problems (513)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Severe abdominal pain, swelling, or vomiting' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent vomiting and progressive abdominal swelling', 'Severe pain or cramping', 'Vomiting brown, yellow, or green bitter-tasting emesis', 'Significant rectal bleeding with no history of hemorrhoids or bleeding with constipation', 'Infant < 1 month, breast-feeding, and signs of dehydration' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'No bowel movement in 5–7 days and constipation unresponsive to home care measures', 'Recent surgery, injury, or childbirth', 'History of diverticulitis and fever', 'Infant has no stool for > 6–10 days', 'Child/infant crying, bloating, passing hard stools, and not responding to home care measures', 'Fever for 24–48 hours, cause unknown', 'Infant younger than 2 months had first stool after 24 hours and is now constipated' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Dry hard stools', 'Pain with bowel movements', 'Recent change in stools or bowel habits', 'Chronic constipation', 'Small, frequently occurring, liquid or hard stools', 'Intermittent constipation', 'Recent decrease in activity or bed rest', 'Taking pain medications with codeine or other medications that increase constipation', 'Blood on tissue or surface of stool' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Make sure diet is adequate in volume (quantity), bulk (high fiber), and fluids (6 to 8 [8 ounce] glasses a day, unless on a restricted fluid diet).', 'Drink a hot beverage each morning, such as coffee, tea, or hot water with lemon.', 'Establish a regular time for privacy and elimination each day.', 'Increase exercise as tolerated.', 'Adults may try OTC laxatives (Metamucil, Miralax, glycerin suppositories) or an enema if other measures are unsuccessful. Follow instructions on the label. Ask pharmacist for other product suggestions.', 'Infants:' = [ 'For infants > 1 month, if the infant is drinking juice, give prune or apricot juice mixed with water to help relieve constipation. Do not give enemas or laxatives.', 'For infants > 2 months, give fruit juice (1 ounce per month of age, twice a day).', 'For infants > 4 months, add baby foods high in fiber such as prunes, peaches, pears, or sweet potatoes.' ], 'Children: Increase fruit juice and decrease milk to 1 pint a day. Increase high-fiber foods, such as bran cereals, oatmeal, bran muffins, or popcorn (if child > 4 years). Avoid laxatives and enemas.', 'May use stool softeners such as Citrucel, Metamucil, or mineral oil. (1/2 to 1 tbsp per day is usually sufficient. However, read directions on container label before administering.)', 'For rectal pain due to constipation, sit in a warm bath for 20 minutes.', 'For painful and bleeding hemorrhoids, sit in a warm tub of water after each bowel movement. Try OTC medications for hemorrhoids.' ],
      reportToPCP: [ 'Condition persists or worsens', 'Fever, vomiting, and pain', 'Home care measures are ineffective.' ],
      seekEmergencyCare: [ 'Severe abdominal pain, swelling, or vomiting' ]
    },
    'Diarrhea, Adult': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History', 'Associated Symptoms' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11)', 'Abdominal Swelling (17)', 'Constipation (152)', 'Dehydration (173)', 'Diabetes Problems (180)', 'Hemorrhoids (324)', 'Rectal Bleeding (510)', 'Stools, Abnormal (576)', 'Vomiting, Adult (638)', 'Weakness (645)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Diarrhea and severe weakness, lethargy, or faintness', 'Severe abdominal pain, swelling, and fever', 'Diabetic and rapid or labored breathing ' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Severe abdominal pain', 'Grossly bloody stool', 'Signs of dehydration:' = [ 'decreased urination', 'sunken eyes', 'loose dry skin', 'excessive thirst, dry mouth', 'dry mucous membranes', 'Dizziness upon standing', 'Persistent vomiting and diarrhea'] ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Diarrhea every 30–60 minutes for > 6 hours', 'Diarrhea for > 5 days', 'Mucous, pus, yellow, green, or frothy stool > 2 days', 'Persistent fever', 'New onset of loss of bowel control', 'No improvement with home care measures' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Recent change in diet', 'Other family members have diarrhea', 'Recent travel to a foreign country', 'Recent antibiotics in past 2 months', 'New prescription', 'Tube feedings' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take clear liquid diet first 12 to 24 hours (sips of water, flat soda, clear broth, gelatin [not red], flavored ice).', 'During the next 12 hours, progress to eating soup (avoiding cream soups), dry toast, soda crackers, white rice, pretzels, bananas, applesauce, and potatoes.', 'Progress to a regular diet after soft-formed stools occur.', 'Avoid dairy products, citrus juices, raw fruits and vegetables, and fried or spicy foods for 2 to 5 days after diarrhea subsides.', 'After 6 hours of diarrhea and cramping, or if pain persists, OTC antidiarrheal medications (Imodium, Kaopectate, Pepto-Bismol) can be used. Follow instructions on the label.', 'Acetaminophen can be given for fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'No improvement or diarrhea worsens after 48 hours of home care measures', 'Yellow, frothy, bloody, or green stool occurs more than one time', 'Signs of dehydration', 'Fever, weakness, or lethargy', 'Persistent vomiting', 'Person with insulin-dependent diabetes changes diet plan' ],
      seekEmergencyCare: [ 'Person has diabetes and rapid or labored breathing', 'Severe abdominal pain, swelling, and fever' ]
    },
    'Diarrhea, Child': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Frequency', 'Medications', 'History', 'Associated Symptoms' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Child (14); Abdominal Swelling (17); Altered Mental Status (29); Confusion (142); Constipation (152); Dehydration (173); Fever, Child (244); Rectal Bleeding (510); Stools, Abnormal (576); Vomiting, Child (641)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Diarrhea and severe weakness, lethargy, listlessness, or faintness', 'Vomiting with right-sided abdominal pain', 'Infant younger than 3 months with diarrhea and temperature > 100.4°F (38°C)', 'Cold and gray skin', 'Grossly bloody stool', 'Breathing fast and hard', 'Severe pain, drawing knees to chest with cramping' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Signs of dehydration:' = [ 'decreased urination', 'no urine for > 4–6 hours in child younger than 1 year', 'no urine for > 12 hours in child older than 1 year' ], 'Temperature > 104°F (40°C), age > 3 months, and unresponsive to fever-reducing measures', 'crying without tears', 'sunken eyes or fontanels', 'excessive thirst, dry mouth', 'Listlessness', 'Persistent vomiting and diarrhea', 'Diarrhea every hour for > 8 hours', 'Blood in stool' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ '>3 diarrhea stools in 24 hours in a child younger than 1 month', 'Diarrhea for > 3 days or diarrhea while receiving antibiotic therapy', 'Pus or mucus in stool', 'No improvement with home care measures', 'Temperature > 103°F (39.4°C) or temperature > 101°F (38.3°C) for more than 48 hours', 'Fever unresponsive to fever-reducing measures' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Chronic diarrhea', 'Recent change in diet', 'Other family members or pets have diarrhea', 'Recent travel to a foreign country', 'New prescription', 'Recent contact with a snake, lizard, or turtle' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Breast-Feeding Infants ≤ 1 Year Old' = [ 'Continue to feed every 2 hours and offer rehydration fluids (Pedialyte, Infalyte, Rehydralyte) between feedings. Stools usually follow feeding. Diarrhea is a sudden increase in the frequency of stools with loose consistency.', 'Do NOT give Jell-O water mixtures or sports drinks, as these do not contain enough sodium, and the sugar content can make diarrhea worse.' ], 'Formula-Fed Infants ≤ 1 Year Old' = [ 'Give Pedialyte, Infalyte, or Rehydralyte for the first 4 to 6 hours only. Each hour, give at least 2 tsp for every pound your child weighs. Then resume full-strength formula, but give more often than usual. If diarrhea is severe, use a soy formula or soy with added rice (AR) until diarrhea has been gone for 3 days, or switch to soy or lactose-free formula if diarrhea lasts longer than 3 days.', 'Do NOT give Jell-O water mixtures or sports drinks, as these do not contain enough sodium, and the sugar content can make diarrhea worse.' ], 'All Infants > 4 Months and < 12 Months' = [ 'Offer solids, such as infant cereal (especially rice), strained applesauce, carrots, bananas, mashed potatoes, or other high-fiber foods. These starchy foods are more easily digested when your child has diarrhea.', 'Avoid all fruit juices, as these will make diarrhea worse.', 'If your child refuses the solids, offer extra formula rather than water.' ], 'Children > 1 Year Old' = [ 'Fluids: Avoid juices, and increase water and other fluids that are caffeine-free. Eat or drink less milk and milk products for 2 to 3 days. If solids are being taken well, milk products can still be used and should be well tolerated.', 'Maintain regular diet if tolerated well.', 'Avoid foods that would normally cause loose stools in your child, such as spicy sauces or beans.' ], 'Additional Home Care Advice' = [ 'Acetaminophen can be given for fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Diarrhea often is very contagious. Wash hands with soap and water after using the toilet or changing a diaper.', 'If diaper rash or redness occurs in the anus, wash with running water, dry, and apply petroleum jelly or other barrier ointment to protect the area, particularly at night and during naps.' ] ],
      reportToPCP: [ 'No improvement or diarrhea worsens after 48 hours of home care measures', 'Yellow, frothy, bloody, or green stool occurs more than once', 'Signs of dehydration: decreased urination, dry mouth, no tears', 'Fever, weakness, or lethargy', 'Watery diarrhea and vomiting clear fluid > 3 time' ],
      seekEmergencyCare: [ 'Rapid or labored breathing', 'Severe abdominal pain, swelling, and fever', 'Infant < 2 months and fever > 100.4°F (38.0°C)', 'Gross bloody stools', 'Cold and gray skin', 'Severe listlessness or fainting' ]
    },
    'Feeding Tube Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Type of Tube', 'Length of Time', 'Tube in Place', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Swelling (17)', 'Wound Healing and Infection (659)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Severe bleeding', 'Severe pain', 'Sudden onset of difficulty breathing or shortness of breath' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Feeding tube removed or dislodged and pain, bleeding, or swelling' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Tube frequently clogs after medication or feeding solution is added', 'Unable to unclog tube after trying home care measures', 'Feeding tube fell out', 'Caregiver concerned tube is displaced', 'Insertion site appears infected (redness, swelling, pain, red streaks, or drainage)' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Is the following present?',
          list: [ 'Inability to pass solution into feeding tube' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'To unclog feeding tube (for a caregiver who has received previous instructions; if no previous instruction, refer caller to home health nurse, PCP, Clinic, or ED):' = [ 'Raise head of bed 45 degrees.', 'Insert the tip of a large syringe into the tube and pull back to remove as much matter from the tube as possible.', 'Fill the syringe with 30 mL (1 ounce) of water.', 'Connect syringe to tube and irrigate.', 'Remove as much matter as possible.', 'Push 5 mL of cranberry juice, cola, or tea into the tube and clamp.', 'Repeat the process until the tube is cleared.' ], 'Flush tube with 50 mL of water after feeding, medications, or supplements are inserted into the tube.', 'To check placement of feeding tube (for a caregiver who has received instruction from a nurse or PCP regarding verifying tube placement):', 'Turn off pump.', 'Using large syringe, insert tip into feeding tube and gently pull back.', 'If there is concern the tube is displaced, do not use the tube until tube placement is verified.' ],
      reportToPCP: [ 'Unable to unclog tube', 'Signs of infection (fever, drainage, warmth, redness, red streaks, or foulsmelling drainage)', 'Tube becomes dislodged or falls out' ],
      seekEmergencyCare: [ 'Severe bleeding', 'Severe pain', 'Sudden onset of difficulty breathing or shortness of breath' ]
    },
    'Food Allergy, Known or Suspected': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause If Known', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Diarrhea, Adult (185), Child (188)', 'Food Poisoning, Suspected (254)', 'Hives (335)', 'Itching (384)', 'Rash, Adult (501), Child (505)', 'Vomiting, Adult (638), Child (641).' ],
      nurseAlert: 'Use this protocol only if previously diagnosed with a food allergy or prior reaction to a food substance.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present shortly after eating?',
          list: [ 'Difficulty breathing', 'Confusion', 'Difficulty swallowing', 'Fainting', 'Severe dizziness' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Is the following present within 30 minutes after eating?',
          list: [ 'Swelling of lips, tongue, or mouth' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present after eating?',
          list: [ 'Generalized hives or itching', 'Sore throat', 'Postnasal drip and throat clearing', 'Congestion, sneezing, or runny nose', 'Fatigue', 'Headache', 'Persistent diarrhea or vomiting' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Try to identify the food causing the problem and avoid it. Eggs and milk are the most common food allergies in infants. Peanuts, eggs, chocolate, cow’s milk products, soybeans, tree nuts, wheat, fish, and shellfish are the most common causes of food allergies.', 'Eliminate the suspected food from the diet for 2 weeks and note whether symptoms disappear. If so, avoid that food in the future. If not, observe for relationship between other foods and symptoms (hives, swelling in mouth, diarrhea).', 'Try baking soda baths, Caladryl lotion, or calamine for itching, or take an antihistamine (Benadryl) tablet (follow instructions on the label).' ],
      reportToPCP: [ 'No improvement in symptoms or condition worsens', 'Desire to add suspected food back to diet' ],
      seekEmergencyCare: [ 'Fainting', 'Difficulty breathing', 'Confusion', 'Difficulty swallowing', 'Severe dizziness' ]
    },
    'Food Poisoning, Suspected': {
      keyQuestions: [ 'Name','Age', 'Onset', 'Associated Symptoms', 'History', 'Medications', 'Suspected Source' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Abdominal Swelling (17)', 'Avian Influenza “Bird Flu” Exposure (52)', 'Dehydration (173)', 'Diarrhea, Adult (185), Child (188)', 'Rectal Bleeding (510)', 'Vomiting, Adult (638), Child (641)' ],
      nurseAlert: 'If caller suspects food poisoning after eating at a restaurant, encourage caller to notify the restaurant. Other patrons may have had the same problem. Early notification helps the restaurant to track the source and correct the problem.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Sick 6–48 hours after eating canned, smoked, or vacuum-packed foods and are any of the following present?',
          list: [ 'Altered mental status', 'Difficulty breathing or swallowing, or blurred vision', 'Vomiting blood', 'Bloody stool' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Pain is severe, worsens, or lasts > 4 hours', 'Nausea and vomiting > 12 hours and unresponsive to home treatment or OTC medications', 'Diarrhea > 48 hours and unresponsive to home treatment or OTC medications', 'Bloody diarrhea', 'Signs of dehydration:' = [ 'decreased urine', 'sunken eyes', 'loose dry skin', 'excessive thirst, dry mouth', 'child crying without tears' ], 'Dizziness upon standing', 'Rash', 'Fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Nausea, vomiting, diarrhea, abdominal pain occurred after eating unrefrigerated meat, poultry, fish, mayonnaise, or egg products', 'Others eating the same meal also are ill' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Drink small sips of clear fluids (apple juice, tea, broth, sports drinks, clear soda pop, ginger ale) frequently (every 5 to 10 minutes) until nausea and vomiting subside. Increase amount as tolerated during the first 24 hours after vomiting subsides.', 'Avoid milk products when experiencing diarrhea.', 'Avoid spicy foods, alcohol, dairy products, and coffee for 48 hours after vomiting and diarrhea have subsided.', 'Avoid aspirin.', 'Prevention:' = [ 'Avoid meats, dressings, sauces, and mayonnaise-based preparations that have been at room temperature for > 2 hours. Maintain a food temperature of < 40°F (4.4°C) or > 140°F (60°C).', 'Do not eat the contents of cans or jars with bulging lids.', 'Defrost meats in the refrigerator or microwave, rather than at room temperature.', 'Wash hands, cutting boards, and countertops frequently, especially after handling raw chicken or eggs.', 'If the food smells unusual or foul, do not eat it.' ] ],
      reportToPCP: [ 'Condition persists > 48 hours or worsens', 'Blood in the stool or vomit (not streaks or flecks)', 'Temperature > 101°F (38.3°C)' ],
      seekEmergencyCare: [ 'Blurred vision', 'Difficulty breathing', 'Difficulty swallowing', 'Decreased level of consciousness', 'Signs of dehydration' ]
    },
    'Foreign Body, Rectum': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Object', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Child Abuse (127)', 'Constipation (152)', 'Rectal Bleeding (510)', 'Rectal Problems (513)', 'Sexual Assault (539)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Sharp object in rectum', 'Profuse bleeding', 'Severe pain', 'Victim of sexual assault', 'Traumatic injury', 'High fever, chills, nausea, or vomiting' ],
          true: 'Seek medical care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Unable to remove foreign object after several tries', 'Swelling and tenderness', 'Foul-smelling drainage', 'Rectal bleeding', 'Abdominal or shoulder pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Sensation of rectal fullness', 'Rectal pain', 'Retained condom', 'Unable to pass stool' ],
          true: 'Seek medical care within 24 hours'
        }
      ],
      homeCareInstructions: [ 'Do not try to remove sharp object or object that has broken inside rectum.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Watch for signs of infection: increased pain, discharge, fever, or swelling.' ],
      reportToPCP: [ 'Unable to remove foreign object after several tries', 'Swelling and tenderness persist or worsen', 'Foul-smelling drainage or fever', 'Rectal bleeding', 'Unable to pass stool', 'High fever, chills, nausea, or vomiting' ],
      seekEmergencyCare: [ 'Profuse bleeding', 'Severe pain' ]
    },
    'Foreign Body, Swallowing of': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Object', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Piercing Problems (446)', 'Rectal Bleeding (510)', 'Rectal Problems (513)', 'Vomiting, Adult (638), Child (641).' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Excessive saliva, drooling, or gagging', 'Difficulty swallowing', 'Coughing, choking, or breathing difficulties', 'Suicide attempt' ],
          true: 'Call ambulance or Seek emergency care now'
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
          list: [ 'Wood or plastic object', 'Dull glass object (piece of a jar or cup)', 'Object size smaller than a penny', 'Known substance swallowed but no symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If no symptoms, try a sip of fluid. If no difficulty, try swallowing bread or soft food.', 'A dull glass object, such as a piece of a jar, cup, or ring, should pass with stools without difficulty in 3 to 4 days.', 'Do not give laxatives. Increase fiber (fruit, vegetables, whole grains) in the diet to help stimulate natural elimination.', 'Check stools for swallowed object.' ],
      reportToPCP: [ 'Intermittent choking or gagging', 'Abdominal pain', 'No evidence of object in stools within 7 days', 'Vomiting', 'Chest pain', 'Fever' ],
      seekEmergencyCare: [ 'Drooling, gagging, choking, or difficulty breathing or swallowing' ]
    },
    'Gas/Belching': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Abdominal Swelling (17)', 'Chest Pain (118)', 'Constipation (152)', 'Heartburn (313)', 'Indigestion (370)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Chest, jaw, or neck pain or discomfort' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Severe abdominal pain', 'Shortness of breath', 'Excessive sweating', 'Palpitations', 'Severe nausea and/or vomiting' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent abdominal discomfort after belching', 'Pain radiates to back' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Intermittent abdominal discomfort or swelling', 'Burping, belching, or hiccups after meals', 'Belching or heartburn between meals' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid gas-forming foods (parsnips, beans, corn, cabbage, onions, fried food).', 'Avoid overindulgence in sweet desserts, fatty foods, and other foods that are known to cause gas.', 'Avoid eating too fast or too much.', 'Avoid excessive gum chewing.', 'Stop smoking if possible or reduce smoking at mealtime.', 'Drink an adequate amount of fluids each day.', 'Try to reduce stress or excitement, especially at mealtime.', 'Sip flat, clear carbonated beverage or peppermint tea to help break up gas.', 'Take your usual antacids (Di-Gel, Mylanta-II, Mylicon) to help relieve gas. Follow instructions on the label. Ask pharmacist for other product suggestions.' ],
      reportToPCP: [ 'Symptoms persist or worsen after home care measures', 'Severe pain', 'Shortness of breath', 'Excessive sweating', 'Palpitations', 'Nausea and vomiting' ],
      seekEmergencyCare: [ 'Chest, neck, or jaw pain, or discomfort develops', 'Light-headedness' ]
    },
    'Gas/Flatulence': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Abdominal Swelling (17)', 'Chest Pain (118)', 'Constipation (152)', 'Indigestion (370)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is severe abdominal pain present?',
          list: [ null ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Is the following present?',
          list: [ 'Black tarry stool' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Severe nausea and vomiting' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Persistent abdominal discomfort after passing gas', 'Blood in stool', 'Pain radiates to back' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Intermittent abdominal discomfort or swelling', 'Excessive flatulence', 'Pale, bulky, foul-smelling stools', 'Recent ingestion of high-fiber or gas-producing foods, such as beans or beer' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid gas-forming foods (parsnips, beans, corn, cabbage, onions, fried food).', 'Avoid overindulgence in sweet desserts, fatty foods, and other foods that are known to cause gas.', 'Avoid eating too fast or too much.', 'Avoid laxatives.', 'Drink an adequate amount of fluids each day.', 'Maintain regular bowel habits.', 'Maintain regular bowel habits.', 'Exercise regularly.', 'Try to reduce stress or excitement, especially at mealtime.', 'Sip flat, clear carbonated beverage or peppermint tea to help break up gas.', 'If lactose intolerant and unable to avoid dairy foods, ask pharmacist for OTC product suggestions.', 'As an alternative, try sugar-coated fennel seeds after a meal or sip tea brewed with fennel seeds to break up and disperse gas in the intestinal tract.' ],
      reportToPCP: [ 'Symptoms persist or worsen after home care measures', 'Nausea/vomiting' ],
      seekEmergencyCare: [ 'Large amount of blood in stool', 'Black tarry stools', 'Light-headedness' ]
    },
    'Heartburn': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Associated Symptoms', 'Pain Scale' ],
      otherProtocolstoConsider: [ ' Abdominal Pain, Adult (11), Child (14)', 'Chest Pain (118)', 'Gas/Belching (282)', 'Indigestion (370)', 'Vomiting, Adult (638), Child (641)', 'Swallowing Difficulty (589)' ],
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
          list: [ 'History of diabetes or cardiac disease', 'Dizziness or light-headednes' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Discomfort persists after taking antacids', 'Condition worsening, requiring more frequent use of antacids', 'Difficult or painful swallowing', 'Sensation that pill is stuck in esophagus' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Pain increased with use of medications', 'Increased pain bending over, exercising, or lying down soon after eating', 'Nausea or vomiting', 'Pregnancy', 'Frequent belching', 'Burping stomach contents into mouth', 'Obesity', 'Heavy tobacco or alcohol use', 'Increased stress' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Try OTC antacids (Maalox, Mylanta, Riopan, Tums) and follow directions on bottle. Try OTC Pepcid AC, Tagamet HB, Zantac, or Prilosec. Consult with PCP if taking other prescription medications. Liquids provide faster relief than tablets. Do not give Pepto-Bismol to a child. Ask pharmacist for additional product suggestions.', 'Avoid eating or drinking 2 to 3 hours before going to bed.', 'Do not lie down, bend over, or exercise soon after eating.', 'Elevate head of bed 4 to 6 inches using blocks or bricks, or lie on left side to help speed stomach emptying and reduce reflux.', 'Eat small meals, but eat them more than three times a day.', 'Avoid spicy foods, alcohol, coffee, smoking, chocolate, citrus fruits, tomatoes, vinegar, fatty foods, or any other food or drink that triggers heartburn.', 'If aspirin or ibuprofen worsens the problem, try acetaminophen. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid tight-fitting clothing, such as girdles, belts, control-top pantyhose, and pants or skirts with a tight-fitting waistband.', 'Fifty minutes after dinner, sip 1 tsp apple cider vinegar, diluted in water or juice; this will help hasten digestion of food, lessening reflux when sleeping.' ],
      reportToPCP: [ 'Discomfort occurs after taking prescribed medication', 'No improvement in 3 days or condition worsens', 'No relief from antacids or other OTC drugs (such as Pepcid AC or Zantac)', 'Frequent use of antacids', 'Difficult or painful swallowing' ],
      seekEmergencyCare: [ 'Shortness of breath', 'Dizziness', 'Cool, moist skin', 'Pain or discomfort in neck, jaw, shoulders, back, or arms', 'Blue or gray face or lips', 'Fainting', 'Vomiting blood or dark coffee-grounds–like emesis' ]
    },
    'Hemorrhoids': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Hemorrhoidal Problems', 'Medication', 'History', 'Prior Treatment', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Rectal Bleeding (510)', 'Rectal Problems (513)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Severe persistent rectal bleeding', 'Foreign body', 'High fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Severe rectal pain, interfering with activities', 'Signs of infection: redness, pain, drainage, or fever', 'Diabetes' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Bleeding in absence of stool', 'Streaks of blood on stool surface', 'History of pregnancy, prolonged sitting, constipation', 'Increased straining during bowel movements', 'Pain, itching, or mucus discharge after bowel movement', 'Small lumps around or inside the rectal area for 1 to 3 days' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Sit in a warm tub or sitz bath 10 minutes several times daily to relieve discomfort and swelling, especially after painful bowel movements.', 'Clean rectal area with soft tissue or moist wipes after each bowel movement.', 'To relieve itching, apply cold compresses to the area for 10 minutes, 4 times a day.', 'Apply zinc oxide or petroleum jelly to the clean dry area to help reduce irritation and to ease passage of stool. Follow instructions on the label.', 'If no relief with these measures, try OTC medications (hemorrhoid suppositories, hydrocortisone [0.5% strength], Tucks). Follow instructions on the label. Products with witch hazel may help to reduce discomfort. Products with hydrocortisone help to reduce itching.', 'Avoid prolonged sitting, standing, lifting, or straining.', 'Wear cotton clothing and loose underwear.', 'Avoid straining during bowel movements. Take your time, but avoid sitting more than 2 minutes. Get up, do something else and return when it feels easier.', 'To help prevent constipation, drink plenty of water and eat a diet high in fiber (fruits, vegetables, and whole grain cereals).' ],
      reportToPCP: [ 'Hard lump develops around the rectal opening', 'Excessive rectal bleeding or black stools occur (more than once)', 'Severe pain is unresponsive to home care measures', 'Pain or bleeding > 1 week', 'Signs of infection: increased redness, pain, swelling, drainage, or fever' ],
      seekEmergencyCare: [ null ]
    },
    'Hiccups': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Chest Pain (118)', 'Swallowing Difficulty (589)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Confusion, lethargy', 'Difficulty breathing', 'Fainting', 'Chest, neck, jaw, or arm pain or pressure' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent pain', 'Constant hiccups > 8 hours' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent vomiting', 'Pain in shoulder, abdomen, or back' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Sudden onset after taking a new medication', 'Interferes with sleep', 'Anxiety or irritability', 'Intermittent episodes', 'Increased alcohol use', 'Mild discomfort', 'Recent ingestion of hot or irritating food or drink', 'History of cancer' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take a deep breath and hold for 15 to 30 seconds.', 'Breathe into a paper bag for 5 minutes.', 'Sip ice water.', 'Swallow dry bread, crackers, a teaspoon of dry sugar, or crushed ice. NOTE: Young children can choke on dry sugar. Place sugar in cloth, tie closed, and soak in water. Have the child suck on the sugar sack. May also hold a teaspoon of sugar on tongue until it melts.', 'Pull on tongue.', 'Apply gentle pressure to closed eyelids.', 'Grasp upper lip between teeth and right side of nose and apply gentle pressure.', 'Stroke back of tongue.', 'Take your usual antacid (Maalox, Mylanta) as directed on container.', 'Divert attention through distraction.' ],
      reportToPCP: [ 'Persistent or worsening condition' ],
      seekEmergencyCare: [ ' Chest, neck, jaw, or arm pain or pressure', 'Difficulty breathing', 'Confusion or lethargy', 'Fainting' ]
    },
    'Incontinence, Stool': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', ' Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Rectal  Bleeding (510)', 'Rectal Problems (513)', ' Stools, Abnormal (576)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Incontinence of urine and stool after a seizure, faint, or loss of consciousness', 'Sudden loss of bowel control and slurred speech, muscle weakness, blurred or double vision, or decreased level of consciousness' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Recent back injury, trauma, or fall, severe pain, and several episodes of incontinence', 'Black or bloody stool with clots' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Recent history of childbirth, vaginal or rectal surgery, hemorrhoids, or anal fistula or fissure', 'Abdominal pain', 'Several incontinent episodes ' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Lump felt inside anal opening', 'Sudden onset of diarrhea and unable to make it to the toilet', 'Frequent involuntary seepage of stool and recent history of no bowel movements or several hard stools', 'Recurrence of stool incontinence in child previously toilet-trained' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid constipation. Increase fiber, bulk, and fluids (fresh fruit, vegetables, whole grains, cereals, and brown rice). Try Metamucil to add bulk. Drink 6 to 8 glasses of water daily. Exercise regularly.', 'In a child previously toilet-trained:', 'Allow child to determine time for toileting. Do not force child to sit on toilet.', 'Provide praise when toilet is used.', 'Discuss with child a reward for staying clean all day.', 'If child is soiled, have the child clean self and change clothes (if old enough).', 'Do not scold or punish for accidents or allow other siblings to tease the child.', 'If an elderly or disabled adult is having difficulty making it to the toilet in time, do not show anger. Discuss ways to identify warning signs and get to the bathroom as soon as signs occur.', 'Consider renting or buying a portable toilet for use when sudden diarrhea attacks occur.', 'Review diet and medications, such as use of laxatives, new medications, prune juice, or castor oil.' ],
      reportToPCP: [ 'Bloody stool', 'Abdominal pain', 'Several incontinent episodes', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ null ]
    },
    'Indigestion': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Symptoms Usually Occur Soon After Eating', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Abdominal Swelling (17)', 'Chest Pain (118)', 'Diarrhea, Adult (185), Child (188)', 'Gas/Belching (282)', 'Gas/Flatulence (284)', 'Heartburn (313)', 'Rectal Bleeding (510)', 'Vomiting, Adult (638), Child (641)', 'Swallowing Difficulty (589)' ],
      nurseAlert: 'Indigestion and heartburn can mimic chest pain. There are many conditions that cause chest pain; some can be potentially life-threatening. Err on the side of caution when triaging callers with symptoms like chest pain. Chest Pain: Causes and Characteristics, Appendix S (696) is provided to help the nurse gain a better understanding of the many conditions causing chest pain. It is NOT to be used to try and diagnose a caller\'s condition.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is there a burning or heavy sensation in the chest, and are any of the following present?',
          list: [ 'Shortness of breath', 'Cool moist skin', 'Pain in the neck, jaw, shoulders, back, or arms', 'Blue or gray face, lips, earlobes, or fingernails', 'History of cardiac disease or diabetes', 'Pain occurs with exertion', 'Feeling of impending doom', 'Chest pain and palpitations' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Belching blood', 'Vomiting blood or dark coffee-grounds–like emesis', 'Black tarry stool', 'Severe abdominal pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Discomfort persists after taking medication', 'Condition worsening, requires more frequent use of medication', 'Frequent vomiting, weight loss, or decreased appetite', 'Difficult or painful swallowing' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Pain increased with use of aspirin, ibuprofen, or steroids', 'Increased pain when bending, exercising, or lying down soon after eating', 'Frequent belching or gas', 'Acid taste in mouth', 'Bloated or full feeling', 'Recent increase in stress', 'Symptoms appear soon after eating or drinking', 'Mild nausea or diarrhea after eating', 'Previously diagnosed with reflux esophagitis', 'Recently started new medication' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Try OTC medications (Maalox, Mylanta, Riopan, Tums, Pepcid, Prilosec) and follow instructions on the label. Liquids often provide faster relief than tablets. Consult with PCP if taking other prescription medications.', 'Do not give Pepto-Bismol to a child.', 'Avoid eating 2 to 3 hours before bed.', 'Do not lie down for 2 to 3 hours after eating or bend over or exercise soon after eating.', 'Elevate head of bed 4 to 6 inches using blocks or bricks.', 'Eat small, frequent meals.', 'Avoid spicy foods, alcohol, coffee, smoking, chocolate, citrus fruits, tomatoes, vinegar, fatty foods, and carbonated beverages.', 'If aspirin or ibuprofen worsens the problem, try acetaminophen. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid tight-fitting clothing, such as girdles, belts, control-top panty hose, or pants or skirts with a tight waistband.', 'Take time to eat and drink, thoroughly chewing food.', 'Avoid chewing gum or other activities that result in swallowing air.', 'Avoid foods and drinks known to cause stomach upset and heartburn. Try taking OTC medications (Pepcid AC, Pepto-Bismol, or Prilosec) before eating foods causing symptoms. Follow instructions on the label.', 'Try Gas-X for belching and follow instructions on the label.', 'Sip a tonic made of 4 ounces ginger ale, 1 tsp grated ginger root, 1 tsp honey to soothe an upset stomach.', 'Avoid straining during bowel movements, urinating, and lifting.' ],
      reportToPCP: [ 'Persistent discomfort unresponsive to home care measures after > 3 days or condition worsens', 'No relief from antacids', 'Difficult or painful swallowing' ],
      seekEmergencyCare: [ 'Shortness of breath', 'Cool moist skin', 'Pain in the neck, jaw, shoulders, back, or arms', 'Blue or gray face, lips, earlobes, or fingernails', 'Belching or vomiting blood or dark coffee-grounds–like emesis', 'Severe abdominal pain', 'Chest pain', 'Pain occurs with exertion' ]
    },
    'Ostomy Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Type of Ostomy or Reason for Pouch', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Bleeding, Severe (86)', 'Constipation (152)', 'Wound Healing and Infection (659)' ],
      nurseAlert: 'Use this protocol if the person has an ostomy and has concerns or questions.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Severe bleeding from stoma', 'Severe abdominal pain or swelling', 'Persistent vomiting', 'Fever and abdomen tender or rigid', 'Constipation, abdominal pain, swelling, and vomiting' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Urostomy and temperature > 100.4°F (38°C) and urine is pink, red, or unusually cloudy', 'Nausea, loss of appetite, and abdominal pain', 'Drainage leaking into a surgical wound', 'Taking blood-thinning medication and new onset of bleeding at stoma site or urine is pink or red', 'No ostomy drainage' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'No bowel movement for more than 4 days and constipation unresponsive to home care measures', 'Unable to manage the ostomy or pouch wound' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Small amount of bleeding at the stoma site', 'New onset of itching and burning at ostomy or pouch site', 'Decreased ostomy drainage', 'Mild constipation', 'New medication and change in normal bowel habits' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Ostomy Care' = [ 'Check appliance and make sure parts are snapped securely together.', 'If the ostomy is leaking, remove the appliance, clean the skin with mild soap and water, dry well, and prepare the skin as directed by a nurse or PCP; apply the new appliance. Hold in place for 5 minutes to ensure pouch seals to the skin.', 'Take prescribed medications as directed.' ], 'Bleeding Stoma' = [ 'Remember that a small amount of bleeding is normal, and tissues bleed easily, similar to the bleeding of the gums after brushing teeth.' ], 'Constipation' = [ 'Make sure the diet is adequate in volume, bulk (high fiber), and fluids (6 to 8 glasses a day, unless on a fluid-restricted diet).', 'Drink a hot beverage each morning, such as coffee, tea, hot water with lemon, or prune juice.', 'Follow the prescribed plan for using stool softeners, laxatives, and irrigation.', 'When taking medications with codeine or other medications that increase constipation, follow the constipation-prevention plan prescribed by the PCP.' ] ],
      reportToPCP: [ 'Fever or bleeding persists or worsens', 'Constipation persists or worsens after home care measures', 'Drainage leaking into a surgical wound', 'Persistent leakage after home care measures', 'Itching and burning persists after use of prescribed medication' ],
      seekEmergencyCare: [ 'Severe bleeding', 'Severe abdominal pain or swelling', 'Persistent vomiting', 'Fever and abdomen is tender and rigid' ]
    },
    'Pinworms': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Known or Suspected Pinworms', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Bedbug Exposure or Concerns (64)', 'Itching (384)', 'Rectal Problems (513)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Signs of infection (pain, swelling, redness, drainage, warmth, or fever) in rectal area', 'Severe rectal itching worsening at night and early morning', '¼" to ½" white, thread-like worms in rectal or vaginal area', 'Worms visible in stool' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Mild redness, itching, or tenderness in rectal area', 'Child has difficulty sleeping, irritability, or vaginal irritation', 'Exposed to bedclothes or bed linens of child with pinworms', 'Rectal symptoms persist > 1 week after treatment', 'Family member diagnosed with pinworms and concerned about transmission' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'To detect pinworms in a child, shine a light on the child’s anus in a darkened room several hours after bedtime. If present, the worms will move back into the anus.', 'Trim nails closely and encourage good hand washing.', 'Discourage nail biting or thumb sucking.', 'Wash linen and underwear in hot soapy water until pinworms are gone.', 'Vacuum or mop bedroom daily for 2 weeks after treatment.', 'Bathe every morning and clean the affected area. Showers are preferable.', 'Wear shorts or panties under pajamas.', 'To reduce itching:', 'Apply zinc oxide or 1% hydrocortisone cream ointment to affected area.', 'Take a warm bath with Epsom salts or table salt.', 'A prescription medication may be necessary to eliminate the pinworms. Take medication completely and as directed.', 'Try OTC pinworm medication (Reese’s) and follow instructions on the label.' ],
      reportToPCP: [ 'Signs of infection: pain, swelling, redness, drainage, or warmth', 'Condition persists > 3 weeks after treatment' ],
      seekEmergencyCare: [ null ]
    },
    'Rectal Bleeding': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Foreign Body, Rectum (269)', 'Hemorrhoids (324)', 'Vomiting, Adult (638), Child (641)', 'Stools, Abnormal (576)' ],
      nurseAlert: 'Rectal bleeding includes black, maroon, or tarry stools, brightred blood on toilet tissue, on the surface of stool, mixed in with formed or diarrheal stool or passed separately.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is abdominal pain present?',
          list: [ null ],
          true: 'Go to Abdominal Pain protocol (11)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Vomiting blood or coffee-grounds–like emesis care now”', 'Intermittent abdominal pain', 'Frequent black tarry stools', 'Large amount of bright-red blood mixed in the stool or passing of blood clots' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Use of blood thinners, steroids, nonsteroidal anti-inflammatory medications, or large doses of aspirin' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Recent history of cancer', 'Temperature > 100°F (37.7°C)' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Stool streaked with red blood', 'Blood on toilet tissue after wiping', 'Constipation or hemorrhoids', 'Bleeding persists > 2–3 days after constipation improves', 'Taking iron preparations or bismuth subsalicylate (Pepto-Bismol)', 'Recent ingestion of beets or spinach ' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Soak in a warm saline bath for 20 minutes a day to cleanse the area and promote healing. (Add 2 tbsp of salt or baking soda to the water.)', 'Keep rectal area clean. May use medicated pads (Tucks) to cleanse and soothe area; follow instruction on the label. Ask pharmacist for additional product suggestions.', 'If rectal area is irritated, apply OTC hydrocortisone ointment (AnusolHC, Cortaid) or zinc oxide paste or powder.', 'If hemorrhoids persist, try OTC preparations (Anusol, Nupercainal, Preparation H) to help soothe and shrink hemorrhoids. Follow instructions on the label.', 'Increase fluid intake and eat a diet high in fiber: fruits, vegetables, bran, grains, and beans. Avoid constipating foods such as cheese. This is particularly important if taking narcotic pain medications for discomfort.', 'If taking iron preparations or bismuth subsalicylate (Pepto-Bismol) or eating spinach or beets, follow up with PCP for stool guaiac.', 'Exercise 30 minutes a day even if only at 10- or 15-minute intervals.' ],
      reportToPCP: [ 'No improvement in 3 days or bleeding worsens', 'Abdominal pain', 'Constipation or hemorrhoids persist > 1 week after home treatment', 'Blood mixed with stool or black stools' ],
      seekEmergencyCare: [ 'Vomiting blood or coffee-grounds–like emesis', 'Light-headedness or fainting', 'Intermittent abdominal pain', 'Large amount of bright-red blood mixed with stool or passing of blood clots', 'Frequent black tarry stools' ]
    },
    'Rectal Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Foreign Body, Rectum (269)', 'Hemorrhoids (324)', 'Pinworm (453)', 'Rectal Bleeding (510)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Injury to the rectal area', 'Rape or sexual abuse', 'Passing more than once of black or bloody stools with clots', 'Unable to remove foreign object from rectum', 'Child with red peeling rash in rectal area' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Severe pain', 'Severe bleeding' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain or itching that is unresponsive to home care measures', 'Exposure to a sexually transmitted disease', 'Recent surgery', 'Painless rash or lesion > 24 degrees', 'Recent colonoscopy, sigmoidoscopy, or invasive procedure' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Intermittent rectal swelling, pain, itching, or bleeding', 'Pain or bleeding for < 48 hours', 'First episode of rectal bleeding, swelling, pain, or itching', 'Rectal itching', 'Visible small worms in stools or around rectal area', 'Painless rash or growth < 24 degrees ' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Soak in a warm bath for 20 to 30 minutes daily.', 'Apply an OTC medication for relief of itching and discomfort.', 'Avoid constipating foods (cheese and white flour products). Include fresh fruits, vegetables, and whole grains in the diet. Drink lots of water every day (unless PCP has ordered a restricted fluid intake).', 'Try OTC medications for hemorrhoids.' ],
      reportToPCP: [ 'Black or bloody stools more than once', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ 'Black or bloody stools with clots more than once', 'Child with red peeling rash in rectal area' ]
    },
    'Stools, Abnormal': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Recent Dietary Habits', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Hemorrhoids (324)', 'Rectal Bleeding (510)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is there abdominal pain?',
          list: [ null ],
          true: 'Go to Abdominal Pain, Adult (11), Child (14) protocols'
        },
        {
          B: 'Is there diarrhea?',
          list: [ null ],
          true: 'Go to Diarrhea, Adult (185), Child (188) protocols'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Black or dark stools for more than two bowel movements and light-headedness or dizziness', 'Vomiting blood or dark coffee-grounds–like emesis', 'Passing blood clots' ],
          true: 'Seek emergency care now'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Black tarry stools without recent ingestion of iron pills, beets, bismuth salicylate (Pepto-Bismol), or spinach', 'Large amount of bright red blood mixed in the stool', 'Bloody stool, fever, vomiting, ill feeling', 'Age < 12 weeks, fever, and bloody stools' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Pale stool, yellow skin and eyes', 'Pale, foamy, bulky, foul-smelling stool', 'Blood mixed in stool or black stools for more than two consecutive bowel movements', 'Persistent weight loss and thin, pencil-like stools ' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          F: 'Are any of the following present?',
          list: [ 'Stool streaked with red blood', 'Blood on toilet tissue after wiping', 'Discolored stool and recent ingestion of iron pills, beets, Pepto-Bismol, spinach, tomatoes, or peppers, or stool is color of recently ingested food', 'Persistent discoloration', 'Persistent bleeding > 3 days', 'Constipation or hemorrhoids ' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'For hemorrhoids, soak in a warm saline bath for 20 minutes a day (add 2 tbsp of salt or baking soda to the water).', 'Keep rectal area clean.', 'If rectal area is irritated, apply OTC hydrocortisone ointment or zinc oxide paste or powder.', 'If hemorrhoids persist, try OTC preparations to help soothe and shrink hemorrhoids.', 'Increase fluid intake and eat a diet high in fiber: fruits, vegetables, bran, grains, and beans. Avoid constipating foods such as cheese. Note which foods change the color of the stool.', 'Remember the color of the stool should return to normal within 24 hours if the discoloration is caused by a change in diet.', 'Use products with witch hazel (Tucks) to reduce discomfort.' ],
      reportToPCP: [ 'No improvement in 3 days or condition worsens', 'Abdominal pain', 'Bloody stool, fever, vomiting, ill feeling', 'Pale stool, yellow skin and eyes', 'Pale, foamy, bulky, foul-smelling stool', 'Persistent weight loss and thin, pencil-like stools' ],
      seekEmergencyCare: [ ' Black or dark stools for more than two consecutive bowel movements and light-headedness or dizziness', 'Vomiting blood or dark coffee-grounds–like emesis', 'Passing bloody stools' ]
    },
    'Vomiting, Adult': {
      keyQuestions: [ 'Name, Age, Onset, History, Medications, Associated Symptoms, Suspected Cause' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11)', 'Altered Mental Status (29)', 'Chest Pain (118)', 'Dehydration (173)', 'Diabetes Problems (180)', 'Diarrhea, Adult (185)', 'Fever, Adult (241)', 'Food Poisoning, Suspected (254)', 'Headache (303)', 'Head Injury (307)', 'Postoperative Problems (458)', 'Pregnancy, Nausea and Vomiting (478)' ],
      nurseAlert: 'There are many conditions that cause vomiting. When vomiting is associated with several other symptoms, use the protocol that is the primary concern and has the highest probability of a referral to a higher level of care.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Altered mental status', 'Fainting', 'Vomiting bright red blood or dark coffee-grounds– like emesis', 'Recent injury to head or abdomen and vomiting', 'Chest pain or discomfort, difficulty breathing, palpitations, or sweating', 'Persistent severe abdominal pain that interferes with activity' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Signs of dehydration:' = [ 'decreased urine', 'sunken eyes', 'loose dry skin', 'excessive thirst', 'dry mouth', 'dizziness on standing or rising to sitting position' ], 'Suspicion that recent ingestion of wild mushrooms or plant is causing vomiting', 'History of diabetes and unable to control vomiting with home care measures' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent vomiting for > 24 hours that is unrelieved by home care measures', 'Recent surgery, hospitalization, or diagnostic procedure', 'New-onset jaundice' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Diarrhea or constipation', 'History of travel out of the country or a camping trip', 'Other household members are ill', 'Excessive ingestion of food, alcohol, or fluids', 'Recent ingestion of an antibiotic, pain medication, or new medication', 'Possible pregnancy' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Do not eat or drink anything for 1 hour after last emesis.', 'Drink sips of clear fluids for first 12 hours, including gelatin, water, sports drinks, flat soda, clear broth, flavored ice, or apple juice. Do not drink citrus juices.', 'Increase fluids as tolerated.', 'After 12 hours, try small amounts of bland foods, such as rice, potatoes, soda crackers, pretzels, dry toast, and applesauce.', 'After bland food is tolerated, resume normal diet, as tolerated.', 'Retake medications if vomiting occurs within 30 minutes of taking usual medication.', 'Avoid milk, citrus foods and juices, spicy and fatty foods, alcohol, coffee, and caffeinated beverages.', 'Take OTC dimenhydrinate (Dramamine) or phosphorated carbohydrate solution (Emetrol) for nausea, and follow instructions on the package.', 'Viruses causing nausea and vomiting are easily spread. Pay special attention to hand washing. Avoid using towels, tableware, and cups used by infected person.' ],
      reportToPCP: [ 'Fever, weakness, or abdominal pain', 'No improvement in 48 hours or condition worsens', 'Signs of dehydration' ],
      seekEmergencyCare: [ ' Altered mental status', 'Vomiting blood or dark coffee-grounds–like emesis', 'Persistent severe pain that interferes with activity', 'Fainting', 'Chest pain, difficulty breathing, palpitations, or sweating' ]
    },
    'Vomiting, Child': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Suspected Cause', 'History', 'Medications', 'Associated Symptoms' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Child (14)', 'Altered Mental Status (29)', 'Constipation (152)', 'Dehydration (173)', 'Diarrhea, Child (188)', 'Fever, Child (244)', 'Food Poisoning, Suspected (254). Headache (303)', 'Head Injury (307)', 'Postoperative Problems (458)' ],
      nurseAlert: 'There are many conditions that cause vomiting. When vomiting is associated with several other symptoms, use the protocol that is the primary concern and has the highest probability of a referral to a higher level of care.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Altered mental status: listless, unusually irritable, confused', 'Severe headache, stiff neck, or pain bending head forward', 'Vomiting bright red blood or dark coffee-grounds– like emesis', 'Recent head or abdominal injury', 'Exposure to a poisonous substance (such as medications, plants, cleaning agents, pesticides, or wild mushrooms)', 'Neonate < 1 month of age', 'Abdomen is hard or firm when not crying' ],
          true: 'Seek emergency care now. If poison ingestion is suspected, go to Poisoning, Suspected (455) protocol'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Signs of dehydration:' = [ 'decreased urine', 'sunken eyes or fontanel', 'dry mouth', 'crying without tears', 'unusual listlessness' ], 'Breathing hard or fast', 'Persistent abdominal pain interferes with activity', 'Child appears very ill', 'History of diabetes and unable to control vomiting with home care measures', 'Infant < 3 months old and has vomited > 2 times or has projectile vomiting' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Vomiting > 12 hours', 'Temperature > 101°F (38.3°C) for > 24 hours', 'Vomited > 3 times in the last 6 hours', 'Persistent diarrhea', 'Infant with forceful vomiting after feeding' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Moderate diarrhea or constipation', 'History of travel out of the country or a camping trip', 'Other household members are ill', 'Excessive ingestion of food or fluids', 'Recent ingestion of an antibiotic, pain medication, or new medication', 'Earache, cold, sore throat, or fever' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Infants' = [ 'Introduce 1 tsp Lytren, Pedialyte, Infalyte, or Kaolectrolyte every 5 minutes and increase as tolerated.', 'If infant drinks juice, introduce 1 tsp every 5 minutes, then clear liquids as tolerated. Do not give juice if diarrhea is also present.', 'If breast-feeding and infant vomits 3 or more times, offer breast for 4 to 5 minutes every 30 to 60 minutes, and offer rehydration fluids between breast-feeds, 1 tsp every 5 to 15 minutes. It should not be necessary to discontinue breast-feeding.', 'If using formula, use small, frequent feedings.' ], 'Children' = [ 'Avoid eating or drinking for 1 to 2 hours after vomiting. ', 'Drink 1 tsp every 5 minutes for 4 hours (fruit juice diluted with water, weak tea with sugar, clear broth, gelatin, or flavored ice). After 4 hours without vomiting, the amount of fluids offered may increase. ', 'Avoid milk for 12 to 24 hours after vomiting subsides. ', 'Slowly introduce bland foods, such as rice, potatoes, soda cracker, pretzels, dry toast, applesauce, and bananas, as tolerated 8 hours after last emesis.' ], 'Additional Home Care Advice' = [ 'Acetaminophen can be given for fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'If, after vomiting has subsided, diarrhea is present or continues, follow home care instructions for the treatment of diarrhea. Vomiting should always be treated first.', 'Wash hands with soap and water frequently when caring for a child with vomiting and/or diarrhea.' ] ],
      reportToPCP: [ 'High fever, weakness, or abdominal pain for > 2 hours', 'No improvement in 48 hours or condition worsens', 'Signs of dehydration' ],
      seekEmergencyCare: [ ' Altered mental status', 'Vomiting blood or dark coffee-grounds–like emesis', 'Develops a severe headache, stiff neck, or pain bending head forward', 'Abdomen becomes hard or firm when not crying' ]
    },
  },
  'Genital/Obstetrics and Gynecological Problems': {
    'Breast-Feeding Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Problem', 'Frequency of Feedings', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Breast Problems (98)', 'Crying, Excessive, in Infants (169)', 'Postpartum Problems (462)', 'Spitting Up Infant (573)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the breast-feeding infant having any of the following problems?',
          list: [ 'Respiratory distress', 'Extreme lethargy', 'Projectile vomiting' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Infant refuses to breast-feed because of intermittent lethargy or irritability', 'Newborn jaundice (yellow skin) below the waist', 'Signs of dehydration:', 'fewer than six wet diapers by age 5 days', 'fewer than one wet diaper after birth per day before day 5', 'sunken fontanel', 'dry mouth', 'more than three brick dust urinations', 'Fewer than three yellow stools per day after day 5', 'Puslike drainage from the woman’s nipple', 'Woman has temperature > 100°F (37.7°C), muscle aches, chills, fatigue, or headache' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Milk not in by day 6', 'Swelling and soreness of breast that is unresponsive to home care measures', 'Hard, red, warm area of breast', 'Red streak on the breast tissue', 'Swollen node on the same side as painful breast', 'Unable to get infant to latch on for feeding', 'Sudden searing, stabbing, or burning or radiating pain in breasts' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Breasts are engorged (hardness, swelling, and tenderness)', 'Nipples are cracked, red, or sore', 'Infant has difficulty grasping nipple and maintaining vacuum while sucking', 'Infant pulls away or pushes off breast and cries during feeding', 'Insufficient milk supply for breast-feeding', 'Painful breasts during weaning', 'Uterine cramping and increased vaginal bleeding in new mother during breast-feeding' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Signs of Infection' = [ 'Apply moist hot packs to affected area 10 to 15 minutes, 4 times a day.', 'Express milk manually or pump to help prevent engorgement.', 'Breast-feed frequently (every 1 to 3 hours, even on affected side).', 'Limit activity (encourage others to help with housework).', 'Do not wean at this time.' ], 
        'Engorgement' = [ 'Apply warm water compress to breast or shower before feeding.', 'Massage breast toward nipple.', 'Manually express milk or use a breast pump immediately before a feeding to soften the area around the nipple/areola.', 'Breast-feed on both sides at each feeding.', 'Wear a supportive bra.', 'Apply ice packs after breast-feeding (frozen vegetable bags covered in a lightweight towel can be used).' ],
        'Sore, Cracked Nipples' = [ 'Establish rooting reflex by stroking infant’s cheek and compress as much breast tissue as possible into the infant’s mouth.', 'Wait until the infant has a wide open mouth, like a yawn. The lips should be flanged.', 'If only the nipple is in the infant’s mouth, the nipple may become sore, bruised, cracked, or irritated.', 'Break suction by putting a finger in the corner of the infant’s mouth. Do not pull the nipple out of the infant’s mouth without first breaking the suction.', 'Clean the breast with plain water only. Do not use soap or antiseptic on the breast.', 'A thin layer of lanolin or breast milk can be applied to the nipples after feedings. Allow nipples to air-dry briefly after each feeding.', 'Rotate breast-feeding positions (cradle, football, side-lying).', 'Start each feeding on the least sore side.' ],
        'Infant Has Difficulty Grasping Breast, Pulls Away, Pushes Off' = [ 'Express breast milk before feeding if breast is too full. This also helps aid letdown.', 'Encourage rooting reflex and wait until the infant’s mouth is wide open.', 'Compress and hold the breast tissue until the infant has a good latch and starts suckling for a minute.', 'Massage breast while infant’s swallowing is slowing down.', 'Try different breast-feeding positions (cradle, football, side-lying).' ],
        'Insufficient Milk Supply' = [ 'Remember that frequent breast-feeding stimulates milk supply.', 'Try breast-feeding every 2 to 3 hours (minimum of eight breast-feedings per 24 hours).', 'May need to awaken infant and offer breast-feeding.', 'Offer both breasts at one feeding.', 'Massage breast and use a warm water compress before breast-feeding.', 'Encourage nutritive (active swallowing) feeding by stimulating the infant during feedings (rub back, tickle toes, touch under jaw).', 'Remember that six wet diapers per 24 hours after day 5 is adequate output.', 'Infant should have a minimum of three yellow stools per 24 hours from day 5 until the age of 6 to 8 weeks.', 'Stooling decreases at 6 to 8 weeks.', 'Sudden softening of breast at 6 to 8 weeks after delivery is normal because milk supply is adjusting and becoming efficient.', 'Cluster feedings (every 1 to 1½ hours) occur often during growth spurts.', 'Avoid emotional stress and anxiety and estrogen-containing birth control pills.', 'Do not give solids before infant is 4 months old because solids reduce the infant’s sucking and the mother’s milk supply.', 'Minimize use of pacifiers.', 'Contact PCP or obstetrics/gynecology provider if taking estrogen-containing birth control pills.' ],
        'Uterine Cramping and Increased Vaginal Bleeding' = [ 'Cramping is normal with breast-feeding in the early postpartum period.', 'Call PCP if saturating one pad per hour (bright red bleeding).', 'Breast-feeding helps the uterus return to normal state faster.' ],
        'Exhaustion' = [ 'Remember that taking care of an infant is hard work.', 'Try to nap while the infant naps.', 'Take care of yourself by eating a well-balanced diet.', 'Drink enough fluids to keep your urine light yellow.', 'Take vitamins and iron supplements as directed by your PCP.', 'Avoid drugs, smoking, and drinking alcohol, and limit caffeine consumption.', 'Postpartum depression may contribute to exhaustion. If depression lasts longer than 2 weeks, contact your PCP.', 'If infant is feeding often at night, gently stimulate and awaken the infant every 2 to 3 hours during the day.' ],
        'Painful Breasts During Weaning' = [ 'Wear a supportive bra.', 'Avoid weaning too rapidly; lengthen weaning time if needed.', 'Decrease one to two feedings (at same time each day) every 2 to 4 days.', 'Wait until breasts become accustomed to the change before decreasing another feeding.', 'Use ice packs to reduce swelling.', 'Manually express small amounts of milk or use a breast pump until a little relief is felt.' ],
        'Sleepy Infant' = [ 'Unwrap blankets and undress infant to change diaper.', 'Massage infant’s legs, back, and arms.', 'Give infant a back rub by walking your fingers down his/her spine.', 'Try infant “sit-ups” by holding the infant away from you and gently lift him/her toward your face.', 'If newborn has not eaten in 6 hours, feed infant pumped breast milk or formula.' ],
      ],
      reportToPCP: [ 'Condition persists or worsens', 'Signs of infection develop', 'Symptoms of infection persist > 2 to 3 days or fever suddenly rises', 'Signs of thrush (sudden breast pain)', 'Infant shows signs of dehydration', 'Infant refuses to breast-feed, has jaundice below the waist, or < 3 yellow stools per day after day 5' ],
      seekEmergencyCare: [ 'Infant has respiratory distress, extreme lethargy, or projectile vomiting' ]
    },
    'Breast Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History (if breast-feeding, see Breast-Feeding Problems [93])' ],
      otherProtocolstoConsider: [ 'Fever, Adult (241), Child (244)', 'Laceration (398)', 'Menstrual Problems (407)', 'Piercing Problems (446)', 'Pregnancy Problems (481)', 'Tattoo Problems (602)', 'Wound Healing and Infection (659)' ],
      nurseAlert: 'If new piercing or tattoo and signs of infection, irritation or feeling ill go to Piercing Problems (446) or Tattoo problems (602)',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Chills or fever and headache during postpartum period', 'Recent trauma or piercing to breast and laceration or signs of infection', 'Muscle aches, fever, and painful red area on breast during postpartum period', 'Foul-smelling discharge from nipple', 'Severe pain', 'Puncture and leaking of breast implant' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' History of red, hot, lumpy breasts', 'Skin ulceration', 'Bloody discharge', 'Nipple drainage in nonpregnant woman', 'Sudden searing, stabbing, or burning pain in breasts', 'New tattoo and pain at wound site, chills, feeling ill, or headache' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Recent trauma to the breast and pain, swelling, or bruising', 'Lumpy breasts and no other symptoms', 'Lump is unrelated to premenstrual cycle', 'Lump in a male', 'Female’s last breast examination > 1 year ago', 'Lumps appear 1 week before menstruation and disappear after menses', 'Dimpling or change in nipple position', 'Nipple soreness or curdlike drainage after taking antibiotics' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Watch for signs of infection: fever; nipple or fissure discharge; red, hot, painful area; red streaks. Apply moist hot packs to affected area for 10 to 15 minutes, 4 times a day, until symptoms subside.', 'If trauma is related, apply ice packs every 2 to 4 hours for first 24 to 48 hours, then apply hot packs for 10 to 15 minutes, 4 times a day.', 'Keep nipples clean and dry.', 'Avoid clothing that irritates nipples.', 'For premenstrual swelling and tenderness, reduce intake of salty foods, caffeine, chocolate, and cola beverages.', 'Follow PCP recommendations for regular self-breast checks and mammograms.' ],
      reportToPCP: [ ' Lump persists for 48 hours after a trauma', 'Condition persists or worsens', 'Signs of infection', 'Bloody, green, brown, or yellow drainage', 'Severe pain' ],
      seekEmergencyCare: [ null ]
    },
    'Contraception, Emergency (EC)': {
      keyQuestions: [ 'Name', 'Age', 'Onset (number of hours since last unprotected intercourse)', 'Cause', 'Medications', 'Birth Control History', 'Other Symptoms' ],
      otherProtocolstoConsider: [ 'Blood/Body Fluid Exposure (88)', 'Domestic Abuse (195)', 'Foreign Body, Rectum (269), Vagina (277)', 'Sexual Assault (539)', 'Sexually Transmitted Disease (STD)', 'Vaginal Bleeding (630)', 'Vaginal Discharge/Pain/Itching (633)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Recently taken emergency contraception pills and signs of allergic reaction (difficulty breathing or swallowing, sudden throat or tongue swelling, inability to speak, or chest pain)' ],
          true: 'Go to Allergic Reaction protocol (26)'
        },
        {
          B: 'Has sexual assault occurred with any of the following present?',
          list: [ 'Vaginal or anal tears or bleeding', 'Request for sexual assault examination and evidence collection', 'Victim is a minor' ],
          true: 'Seek emergency care now and Do not shower or change clothes to allow for evidence collection'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Sexual assault or forced sex occurred and medical examination without collection of evidence has been requested', 'Unprotected intercourse occurred < 120 hours (5 days) and person requests protection for sexually transmitted disease and pregnancy', 'Copper IUD as EC has been requested; unprotected intercourse has occurred within past 5 day' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Questions or concerns about EC', 'Unprotected sex > 120 hours and person has concerns about pregnancy', 'EC pills taken and concerns about side effects exist; or person has nausea/vomiting, abdominal pain, dizziness, fatigue, headache, menstrual changes, or breast tenderness' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Provide reassurance and general information:', 'EC pills are for emergencies and should not be used for ongoing contraception.', 'EC pills do not protect against sexually transmitted diseases.', 'EC pills are most effective in the first 72 hours but can be taken up to 120 hours after unprotected sex. (The EC product “Next Choice” is taken within 72 hours [telephone 866-9WATSON]. “Plan B” is taken within 120 hours. [1-888-not-2-late or 1-668-2-5283]).', 'EC can be obtained without a prescription from select pharmacies if age is 16 or older (some states may vary in age restrictions). If age < 16 years or younger, a prescription is required. Check with your pharmacy for any age requirements.', 'Additional information about EC can be located at http://ec.princeton.edu or at the hotline 1-888-not-2-late (1-668-2- 5283).', 'If pregnancy is a concern, advice a urine pregnancy test be taken. Urine pregnancy tests can be purchased at most drug stores and many markets with pharmacy products.', 'To prevent nausea and vomiting, Dramamine II or Benadryl may be taken one hour before the first EC dose.', 'Provide reassurance; nausea usually passes in a short period of time.', 'If vomiting occurs within one hour of taking EC pills, repeat the dose along with an anti-nausea medication.', 'If side effects such as nausea/vomiting, abdominal pain, dizziness, fatigue, or breast tenderness persist > 24 hours after taking EC pills, contact the PCP.', 'After taking EC pills within 120 hours and having had no menses within 21 days, take a urine pregnancy test. If positive, follow up with the PCP. If negative, wait another 7 days. If no menses occur, take another urine pregnancy test and follow up with the PCP with results.' ],
      reportToPCP: [ 'Persistent nausea/vomiting, abdominal pain, dizziness, fatigue, or breast tenderness > 24 hours', 'Pelvic pain with or without fever', 'Concerns about pregnancy or sexually transmitted disease', 'Vaginal drainage' ],
      seekEmergencyCare: [ 'Signs of allergic reaction; difficulty breathing, sudden throat or tongue swelling, rash, or hives', 'Skin or lips turn gray, blue, or pale', 'Sudden onset of profuse sweating', 'Decrease in level of consciousness' ]
    },
    'Foreign Body, Vagina': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Object', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Piercing Problems (446)', 'Sexual Assault (539)', 'Vaginal Bleeding (630)', 'Vaginal Discharge/Pain/Itching (633)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Sharp object embedded in vagina', 'Profuse bleeding', 'Severe pain', 'Sexual assault', 'Rapid onset: rash, fever, peeling hands or feet, general ill feeling, vomiting, or diarrhea' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Unable to remove foreign object after several tries', 'Swelling and tenderness', 'Foul-smelling discharge', 'Tampon left in vagina > 24 hours and cannot be removed', 'Unable to remove contraceptive or pleasure device' ],
          true: 'Seek medical care within 24 hours. Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Do not try to remove sharp object or object that has broken inside vagina.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Watch for signs of infection: increased pain, discharge, fever, or swelling.' ],
      reportToPCP: [ 'Unable to remove foreign object after several tries', 'Swelling and tenderness persist or worsen', 'Foul-smelling drainage or fever', 'Rash, fever, peeling hands or feet, general ill feeling, vomiting, or diarrhea' ],
      seekEmergencyCare: [ 'Profuse bleeding', 'Severe pain' ]
    },
    'Genital Lesions': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Genital Problems, Male (289)', 'Lice (404)', 'Piercing Problems (446)', 'Scrotal Problems (528)', 'Sexually Transmitted Disease (STD) (542)', 'Skin Lesions: Lumps, Bumps, and Sores (559)', 'Tattoo Problems (602)', 'Vaginal Discharge/Pain/Itching (633)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Severe pain', 'Signs of infection: increased pain, redness, swelling, drainage, warmth, fever' ],
          true: 'Seek medical care within 4 to 12 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Open sores', 'New onset of scattered clustered blisters', 'Fever and general ill feeling', 'Swollen glands in groin area', 'Vaginal or penile discharge or bleeding', 'Severe itching or burning', 'Sores elsewhere on the body', 'Pelvic pain', 'Foreign body', 'Painful lump at vaginal opening', 'No improvement > 3 days of home treatment for yeast infection' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Diagnosed herpes, genital warts, or exposure to an STD and requests treatment', 'Painful urination or bowel movements', 'Painless rash or hard bumps in genital or rectal area > 24 hours' ],
          true: 'Seek medical care within 48 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Itchy red rash', 'History of recent strenuous activity and sweating', 'Pink, scaly, itchy rash on inner thighs, groin, or scrotum', 'Raised red, tender, or white or hard bumps', 'Painless rash or growths < 24 hours' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Soak in a warm bath.', 'Avoid bubble bath, harsh or perfumed soaps, scented toilet paper, or hygiene products.', 'Avoid sexual activity until symptoms subside.', 'Keep area clean and dry.', 'Wear cotton underwear and loose garments. Avoid restrictive clothing.', 'Try OTC cream (Lotrimin) for itchy rash. Follow instructions on the label.', 'If lice are suspected by the presence of small insects or eggs on pubic hairs, see Lice protocol.', 'If caller suspects an STD, refer to local public health department or clinic.' ],
      reportToPCP: [ 'Signs of infection: pain, redness, swelling, drainage, warmth, red streaks, or swollen glands in the groin', 'No improvement after 2 days or condition worsens', 'Increased pain or swelling', 'Discharge or fever develops', 'Suspected exposure to an STD', 'Severe pain' ],
      seekEmergencyCare: [ null ]
    },
    'Genital Problems, Male': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Genital Lesions (286)', 'Piercing Problems (446)', 'Scrotal Problems (528)', 'Sexually Transmitted Disease (STD) (542)', 'Skin Lesions: Lumps, Bumps and Sores (559)', 'Tattoo Problems (602)', 'Urination, Difficult (622)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Persistent painful erection after application of ice pack for 30 minutes', 'Severe pain or swelling', 'Trauma to penis and deformity or bleeding', 'Foreign body in penis' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Unable to pull foreskin back over head of penis', 'Unable to urinate', 'Pain with urination', 'Flank pain', 'Pain in groin after urinating and temperature > 100°F (37.8°C)', 'Pain or swelling in scrotum or testicle(s)' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent swelling, hard lump, or sore on penis', 'Known or suspected exposure to an STD', 'Painful rash or sores', 'Penile discharge > 24 hours', 'Redness or swelling at tip of penis', 'Blood in urine', 'Blood in semen', 'Rash with blisters on penis', 'Swollen foreskin' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Pain during or after intercourse', 'Difficulty having or maintaining an erection and history of diabetes or taking antidepressants, antianxiety medications, blood pressure medications, or diuretics', 'Premature ejaculation', 'Loss of sexual interest', 'Penis caught in zipper', 'Swelling and cut on infant penis', 'Painless rash or growth > 24 hours' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' If pain during intercourse, consider using OTC lubricating jelly (K-Y jelly). Do not use petroleum jelly.', 'If tip of penis is painful after intercourse, explore probable causes, such as allergy to contraceptive cream or condom, and change to alternative methods.', 'If tip of penis is red from rubbing against a diaper, push penis down when diapering infant.', 'If client has sexual dysfunction problems and is taking prescription medications, has diabetes, or has emotional problems, client should discuss with PCP.', 'To release penis caught in zipper:', 'cut off the bottom of the zipper and pull the edges back', 'apply petroleum jelly to penis and zipper track and pull zipper in the direction that originally caused the problem', 'if unable to release penis, seek medical care immediately', 'Look for hair wrapped around infant’s penis and cut to release pressure. Swelling should go down. If unable to remove hair or swelling persists, seek medical care immediately.', 'If an STD is suspected, partner also should be treated. Use a condom until both partners have finished taking prescription medication.' ],
      reportToPCP: [ ' No improvement or problem worsens after home care measures', 'Persistent sexual dysfunction problems' ],
      seekEmergencyCare: [ 'Persistent painful erection', 'Severe pain or swelling', 'Inability to urinate' ]
    },
    'Menstrual Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Provera Injection History', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Sexually Transmitted Disease (542)', 'Vaginal Bleeding (630)', 'Vaginal Discharge/Pain/Itching (633)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Persistent severe bleeding that requires use of more than one full-size sanitary pad per hour for 8', 'Passage of large blood clots or tissue and different than usual menstrual cycle', 'Severe pain and possible pregnancy', 'Sexually active and last menstrual period is 6–8 weeks ago and abdominal or shoulder pain or vaginal bleeding' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Unusually severe pain and no possibility of pregnancy', 'Unexplained fever (temperature > 100°F or 37.8°C) and abdominal pain', 'Fainting or dizziness sitting up or standing', 'Use of tampons and sudden high fever, sunburn-type rash, general ill feeling, dizziness, vomiting, watery diarrhea, rapid pulse, or headache' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Cramping interferes with school, work, or daily activity', 'Persistent vaginal discharge', 'Persistent vaginal bleeding for > 10 days or < 21 days since last period', 'Possible pregnancy and bleeding and no pain' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Persistent pain after bleeding stops', 'Late period and history of increased stress, strenuous activity, significant weight loss, recent illness, stopped taking birth control pills, or older than 40 years of age', 'Light bleeding or mild abdominal discomfort midcycle', 'Irritability, bloating, headaches, or breast tenderness before period', 'Vaginal bleeding occurs after menopause', 'Breakthrough bleeding and taking birth control pills', 'Irregular periods', 'Postcoital bleeding' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Take usual pain medication (aspirin, acetaminophen, ibuprofen, naproxen). Avoid aspirin and ibuprofen if pregnant. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist. Follow the directions on the label.', 'Apply heating pad or hot water bottle to abdomen for 20 to 30 minutes for abdominal discomfort or take a warm bath. Do not fall asleep on a heating pad.', 'Change tampons frequently, at least every 4 hours. Use pads at night.', 'Avoid using tampons if skin infection is present and near the genitals.', 'If period is > 2 weeks late, use home pregnancy kit on first morning urine sample.', 'For premenstrual symptoms, decrease salt, caffeine, and sugar in the diet and alcohol and cigarette use before menstruation.', 'Increase exercise to help reduce cramping and premenstrual symptoms' ],
      reportToPCP: [ 'No improvement in 3 days or condition worsens', 'Menstrual cramps interfere with school, work, or daily activity', 'Fainting or dizziness sitting up or standing', 'Unexplained fever and abdominal pain' ],
      seekEmergencyCare: [ 'Persistent severe bleeding requiring use of more than one full-size sanitary pad per hour for 8 hours', 'Passage of blood clots or tissue' ]
    },
    'Postpartum Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Date of Delivery', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11)', 'Breast-Feeding Problems (93)', 'Constipation (152)', 'Depression (177)', 'Vaginal Discharge/Pain/Itching (633)', 'Wound Healing and Infection (659)' ],
      nurseAlert: 'There are many conditions that can occur following a delivery. When there are multiple associated symptoms, focus on the primary concern that has the highest probability of a referral to a higher level of care.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Shortness of breath or difficulty breathing', 'Vaginal bleeding requiring use of more than one full-size pad per hour and weakness, dizziness', 'Altered mental status', 'Skin pale, moist, and cool', 'Severe lower abdominal pain < 48 hours after delivery', 'Thoughts of harming infant or self', 'Cesarean section and incision is separating' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Temperature > 100°F (37.8°C) 4–10 days after delivery', 'Bleeding with fever or abdominal pain', 'Increased bleeding and abdominal cramping first week after delivery (saturating one pad with bright red bleeding in < 1 hour)', 'Abnormal vaginal discharge with bleeding, fever, or pain, or discharge is foul smelling', 'Vomiting, diarrhea, fever, or rash', 'Calf swelling, pain, or redness', 'Clots of blood larger than a lemon', 'Headache unrelieved by home care measures', 'Muscle aches, fever, and painful red area on breast', 'Chills or fever and headache', 'Vaginal bleeding requiring use of more than one fullsize pad per hour' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent depression > 2–3 weeks', 'Urgency, frequency, or pain with urination', 'Abnormal vaginal discharge without fever', 'Increased pain at episiotomy incision site', 'Increased pain, swelling, foul-smelling drainage, redness, or warmth at cesarean section incision site' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Engorged, tender, hard breasts', 'Cramping', 'Constipation', 'Stretching or pulling sensation at episiotomy site' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Balance activity and rest for first 2 weeks after delivery.', 'Can usually return to work after 6-week checkup if cleared by physician (8 weeks for cesarean section).', 'Remember that contractions 3 to 4 days after delivery are normal and arestimulated by breast-feeding.', 'Bowel movements may not occur 1 to 2 days after delivery. Drink 6 to 8 glasses of water and juices a day and increase intake of fruits, vegetables, and bran. Laxatives (Metamucil) may help. Follow instructions on the label.', 'Sit in a warm bath or sitz bath to relieve discomfort.', 'Apply dry heat to perineum after bath for 10 minutes. May try exposing perineum a foot away from a 25-watt light bulb or using a hair dryer on the low setting.', 'After toileting or changing pad, clean area using soap and warm water in a squirt bottle or antiseptic wipes, cleaning from front to back.', 'Change pad after toileting.', 'Remember that a blood and mucous vaginal discharge may persist for several weeks after delivery, and the discharge increases with activity.', 'Vaginal bleeding 4 to 8 weeks after delivery is not a cause for alarm and usually is the return of menstruation.', 'Discomfort and dryness during intercourse after delivery can be reduced with use of K-Y Jelly. Avoid intercourse until discharge has stopped and stitches are healed. Discuss contraception options with PCP. If breastfeeding, milk letdown may occur.', 'Wear a good supportive bra 24 hours a day for 10 days. If breasts become tender and hard, take a warm bath or apply warm compresses to breasts.', 'Remember that depression after delivery is not unusual and should subside. Discuss depression with PCP.',
      'Cesarean Section Delivery'  = [ 'Expect vaginal bleeding for as long as 6 weeks.', 'Do not insert anything into the vagina for 6 weeks.', 'Avoid stairs and lifting anything heavier than 10 pounds.', 'Do not soak in tub.', 'Get plenty of rest.', 'Change dressing daily until drainage has stopped.', 'Remove sterile strips after 7 to 10 days.' ],
      'Postpartum Depression (Blues)' = [ 'Get as much rest as possible, nap while infant naps.', 'Exercise, such as walking.', 'Eat a well-balanced diet.', 'Encourage family and friends to help with meal preparation, chores, infant care, and housework.', 'Talk about your feelings.' ] ],
      reportToPCP: [ 'No improvement with home care measures or condition worsens', 'Fever, abdominal pain, or unusual vaginal discharge', 'Signs of infection: increased redness, pain, red streaks from the wound, warmth, foul-smelling or thick green drainage, or fever', 'Persistent depression' ],
      seekEmergencyCare: [ 'Shortness of breath or difficulty breathing', 'Vaginal bleeding requiring use of more than one full-size pad per hour and weakness or dizziness', 'Altered mental status', 'Skin pale and moist' ]
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
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
      homeCareInstructions: [ '' ],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
  },
  /*
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
};*/
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
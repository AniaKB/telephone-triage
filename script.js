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
        seekEmergencyCare: [ 'Loss of consciousness > 1 time during the day', 'Difficulty breathing', 'AMS and any of the following:', 'severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body', 'persistent AMS', 'drowsiness and difficulty in arousing', 'headache, fever, or stiff and painful neck' ]f the caller agrees with the advice given, document the call, and encourage the caller to call back or see PCP if the problem worsens. If the caller does not agree with the advice given, reevaluate and advise the caller to follow up with PCP, Clinic, or ED.'
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
        seekEmergencyCare: ['Severe headache or stiff neck or rigidity', 'Sudden weakness on one side of body', 'Difficulty speaking', 'Pale, diaphoretic, and light-headed or weak', 'Hallucination, paranoia, or suicidal threat or attempt', 'Ill child and sudden change in behavior', 'Severe vomiting', 'Fruity breath', 'Flushing or dry skin' ]f the caller agrees with the advice given, document the call, and encourage the caller to call back or see PCP if the problem worsens. If the caller does not agree with the advice given, reevaluate and advise the caller to follow up with PCP, Clinic, or ED.'
      }
    ],
    'Dizziness' = [
      {
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
      }
    ],
    'Facial Problems' = [
      {
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
      }
    ],
    'Fainting' = [
      {
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
      }
    ],
    'Headache' = [
      {
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
      }
    ],
    'Head Injury' = [
      {
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
      }
    ],
    'Insomnia' = [
      {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Neurologic Symptoms' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Numbness and Tingling' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Seizure' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Seizure, Febrile' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Sinus Problems' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
    'Speaking Difficulty' = [
      {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      }
    ],
  ],
  Eyes = [
      'Contact Lens Problems' = {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    }
   ],
    [ 'Eye Injury' : [] ],
    [ 'Eye Problems' : [] ],
    [ 'Foreign Body, Eye' : [] ],
    [ 'Pinkeye' : [] ],
    [ 'Vision Problems' : [] ]
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

let Appendix = [];
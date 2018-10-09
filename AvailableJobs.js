function JobInfo(title, classification, contract, location){
	this.title = title
	this.classification = classification
	this.contract = contract
	this.location = location
}

const ENG = 'Engineer'
const DAT = 'Data'
const LOG = 'Logistics'
const ME = 'Meal Experience'
const FULL = 'Fulltime'
const YGY = 'Yogyakarta'
const JKT = 'Jakarta'

const availableJobs = [
	new JobInfo('Frontend Developer', ENG, FULL, YGY),
	new JobInfo('Mobile Developer', ENG,FULL, YGY),
	new JobInfo('Backend Developer/Senior Backend Developer', ENG,FULL, YGY),
	new JobInfo('Data Analyst', DAT, FULL, JKT),
	new JobInfo('VP/Director of Logistics', LOG, FULL, JKT),
	new JobInfo('Logistic Manager', LOG, FULL, JKT),
	new JobInfo('Logistic Associate', LOG, FULL, JKT),
	new JobInfo('VP/Director of Meal Experience', ME, FULL, JKT),
	new JobInfo('VP/Director of Engineering', ENG,FULL, YGY),
	new JobInfo('Chief Technology Officer', ENG,FULL, YGY)
]
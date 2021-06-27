const leftPerson = (
  name = 'Keanuo',
  company = ['row1', 'row2'],
  content = '主题待定'
) => `
        <div class="row align-items-center speaker">
         
          <div class="col-lg-6 ml-auto">
            <h2 class="text-white mb-4 name" data-aos="fade-right" data-aos-delay="200">${name}</h2>
            <div class="bio pl-lg-5">
              <span class="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">${company.join(
                '</br>'
              )}</span>
              <p class="mb-4" data-aos="fade-right" data-aos-delay="400">${content}</p>
             
            </div>
          </div>
        </div>`

const rightPerson = (
  name = 'Keanuo',
  company = ['row1', 'row2'],
  content = '主题待定'
) => `
         <div class="row align-items-center speaker">
          
          <div class="col-lg-6 ml-auto order-lg-1">
            <h2 class="text-white mb-4 name" data-aos="fade-left" data-aos-delay="200">${name}</h2>
            <div class="bio pr-lg-5">
              <span class="text-uppercase text-primary d-block mb-3" data-aos="fade-left" data-aos-delay="300">${company.join(
                '</br>'
              )}</span>
              <p class="mb-4" data-aos="fade-left" data-aos-delay="400">${content}</p>
            </div>
          </div>
        </div>`

const personContainer = document.querySelector('#guest-container')
console.log('person', personContainer)
const newNode = document.createElement('div')

const timelineNode = (
  time = '9:30',
  ampm = 'AM',
  title = 'Title',
  name = 'Name'
) => {
  let template = `
            <div class="row align-items-stretch">
              <div class="col-md-3 text-white mb-3 mb-md-0"><span class="h4">${time}</span> <span>${ampm}</span></div>
              <div class="col-md-9">
                <h2 class="text-white">${title}</h2>
                <span>${name}</span>
              </div>
            </div>
     `
  let newNode = document.createElement('div')

  newNode.className = 'col-12 border-bottom py-5'
  newNode.dataset.aos = 'fade'
  newNode.dataset.aodDelay = '400'
  newNode.innerHTML = template
  return newNode
}

const timeLineContainer = document.querySelector('#timeline')
console.log('timeline', timeLineContainer)
const timelines = [
  {
    time: '9:00',
    ampm: 'AM',
    title: '题目待定',
    name: 'Kris Gaj 美国乔治梅森大学',
  },
  {
    time: '9:30',
    ampm: 'AM',
    title: '题目待定',
    name: '罗鹏 国家密码管理局商用密码检测中心 正高级工程师',
  },
  {
    time: '10:00',
    ampm: 'AM',
    title: 'Post-Quantum Cryptography and PQC Competitions',
    name: 'Bo-Yin Yang 教授 台湾中央研究院院士',
  },
  {
    time: '10:30',
    ampm: 'AM',
    title: '间休',
    name: '',
  },
  {
    time: '10:40',
    ampm: 'AM',
    title: '题目待定',
    name: '董贵山 中国电子科技网络信息安全有限公司 研究员、首席专家',
  },
  {
    time: '11:05',
    ampm: 'AM',
    title: '密码芯片的可重构和机器学习抗攻击技术',
    name: '单伟伟 东南大学 教授',
  },
  {
    time: '11:30',
    ampm: 'AM',
    title: '全数字物理真随机数发生器的设计与思考',
    name: '朱敏 沐创集成电路设计有限公司 总经理',
  },
  {
    time: '11:55',
    ampm: 'AM',
    title: '芯片PUF信息安全提取方法的探索',
    name: '崔爱娇 哈尔滨工业大学 副教授',
  },
  {
    time: '12:20',
    ampm: 'PM',
    title: '午休',
    name: '',
  },
  {
    time: '14:00',
    ampm: 'PM',
    title: '工业密码芯片的技术特点和电力应用',
    name: '王于波 北京智芯微电子科技有限公司 研究员',
  },
  {
    time: '14:30',
    ampm: 'PM',
    title: '题目待定',
    name: 'Nele Mentens 鲁汶大学 教授',
  },
  {
    time: '15:00',
    ampm: 'PM',
    title: '间休',
    name: '',
  },
  {
    time: '15:10',
    ampm: 'PM',
    title: 'Post-Quantum Cryptography -- Having it implemented right',
    name: 'Sylvain GUILLEY 巴黎高等电信学院 教授',
  },
  {
    time: '15:35',
    ampm: 'PM',
    title: '题目待定',
    name: '樊俊锋 纽创信安科技开发有限公司 总经理',
  },
  {
    time: '16:00',
    ampm: 'PM',
    title: '基于硬件可信构建系统可信',
    name: '张小虎 华为技术有限公司 硬件可信首席技术专家',
  },
  {
    time: '16:25',
    ampm: 'PM',
    title: '基于开关矩阵的可编程强PUF及抗攻击欺骗协议',
    name: '刘伟强 南京航空航天大学 教授',
  },
  {
    time: '16:50',
    ampm: 'PM',
    title:
      '后量子密码算法实现的理论和实践：针对超奇异同源密钥封装的功耗分析和ARM平台电磁攻击',
    name: '张帆 浙江大学 副教授',
  },
  {
    time: '17:15',
    ampm: 'PM',
    title:
      'Highly Efficient Architecture of NewHope-NIST on FPGA using Low-Complexity NTT/ INTT',
    name: '张能 清华大学 博士',
  },
  {
    time: '17:40',
    ampm: 'PM',
    title: '大会主办方致谢',
    name: '',
  },
]
timelines.forEach((item, index) => {
  const { time, ampm, title, name } = item
  timeLineContainer.appendChild(timelineNode(time, ampm, title, name))
})

function join() {
  let newnode = document.createElement('div')
  newnode.style.backgroundImage = `url('images/qr.jpg')`
  newnode.style.backgroundSize = newnode.style.width = '30vw'
  newnode.style.height = '30vw'
  newnode.style.position = 'fixed'
  newnode.style.zIndex = '100'
  newnode.style.top = '50%'
  newnode.style.left = '50%'
  newnode.style.transform = 'translateX(-50%) translateY(-50%)'
  newnode.addEventListener('click', () => {
    timeLineContainer.removeChild(newnode)
  })
  timeLineContainer.appendChild(newnode)
}

const memberContainer = document.querySelector('#member')

const memberNode = (
  title = '大会主席',
  member = [{ name: '王志华', from: '清华大学' }]
) => {
  /**
   * <div class="row" style="margin-bottom: 30px;">
   *    </div>
   */
  let template = `
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="400"><span class="text-primary">${title}</span></div>
          <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
          ${member
            .map(
              (m) => `
            <div class="d-flex coordinator align-items-center">
              <span> <span class="text-white">${m.name}</span> <br> ${m.from}</span>
            </div>
          `
            )
            .join('')}
          </div>
  `
  let newNode = document.createElement('div')
  newNode.className = 'row'
  newNode.style.marginBottom = '30px'
  newNode.innerHTML = template
  return newNode
}

const members = [
  {
    title: '大会主席',
    member: [{ name: '王志华', from: '清华大学' }],
  },
  {
    title: '本地主席',
    member: [
      { name: '陈庆国', from: '哈尔滨理工大学' },
      { name: '周志权', from: '哈尔滨工业大学' },
    ],
  },
  {
    title: '程序委员会主席',
    member: [
      { name: '黄海', from: '哈尔滨理工大学' },
      { name: '王晨旭', from: '哈尔滨工业大学' },
    ],
  },
  {
    title: '程序委员会成员',
    member: [
      { name: '张帆', from: '浙江大学' },
      { name: '白国强', from: '清华大学' },
      { name: '樊俊锋', from: '深圳市纽创信安科技开发有限公司' },
      { name: '冯志华', from: '航天706 所' },
      { name: 'Marc Witteman', from: '安试酷信息科技上海有限公司' },
      { name: '胡晓波', from: '北京智芯微电子科技有限公司' },
      { name: '李洪革', from: '北京航空航天大学' },
      { name: '刘军荣', from: '上海交通大学' },
      { name: '唐明', from: '武汉大学' },
      { name: '乌力吉', from: '清华大学' },
      { name: '吴行军', from: '清华大学' },
      { name: '徐强', from: '香港中文大学' },
      { name: '郁群慧', from: '北京宏思电子技术有限责任公司' },
      { name: '曾晓洋', from: '复旦大学' },
      { name: '张翌维', from: '深圳技术大学' },
      { name: '杨博翰', from: '清华大学' },
      { name: '王新胜', from: '哈尔滨工业大学' },
      { name: '罗敏', from: '哈尔滨工业大学' },
      { name: '周军', from: '电子科技大学' },
    ],
  },
  {
    title: '组织委员会主席',
    member: [
      { name: '刘志伟', from: '哈尔滨理工大学' },
      { name: '王汉宁', from: '清华大学' },
    ],
  },
  {
    title: '出版委员会主席',
    member: [
      { name: '韩天', from: '哈尔滨理工大学' },
      { name: '于斌', from: '哈尔滨理工大学' },
    ],
  },
  {
    title: '宣传委员会主席',
    member: [
      { name: '王安', from: '北京理工大学' },
      { name: '马超', from: '哈尔滨理工大学' },
    ],
  },
]

members.forEach((member) => {
  memberContainer.appendChild(memberNode(member.title, member.member))
})

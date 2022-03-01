const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${hours}${minutes < 10 ? ':0' : ':'}${minutes}${seconds < 10 ? ':0' : ':'}${seconds}`
}

const introduction = [
  `Welcome to makiru の 主页.`,
  {
    type: 'system',
    label: 'System',
    content: `cd makiru の 主页`
  },
  {
    type: 'system',
    label: 'System',
    content: 'Thanks for your visit, let me introduce myself.'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Name:',
    content: '瞳染'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Sex:',
    content: 'Male'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Age:',
    content: '22'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Email:',
    content: '3406128464a@gmail.com'
  },
  {
    time: getTime(),
    type: 'info',
    label: 'Dreams:',
    content: 'Four dreams as follows:'
  },
  {
    type: 'black',
    label: '=> 1.',
    content: 'Watch all the anime I am interested in.'
  },
  {
    type: 'black',
    label: '=> 2.',
    content: 'Go all the places I have ever wanted to go.'
  },
  {
    type: 'black',
    label: '=> 3.',
    content: 'Eat all the food I have ever wanted to eat.'
  },
  {
    type: 'black',
    label: '=> 4.',
    content: 'Play all the games I have ever wanted to play.'
  }
]

export default {
  intro: {
    description: 'Introducting myself again.',
    run(print) {
      let i = 0
      return new Promise(resolve => {
        const interval = setInterval(() => {
          print(introduction[i])
          i++
          if (!introduction[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Done', content: 'Myself introduction is over!' })
          }
        }, 500)
      })
    }
  },
  echo: {
    description: 'Echoes input.',
    run(print, input) {
      return new Promise(resolve => {
        print({
          time: getTime(),
          label: 'Echo',
          type: 'success',
          content: input
        })
        resolve({ type: 'success', label: '', content: '' })
      })
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    run(print, input) {
      return new Promise((resolve) => {
        if (!input) {
          resolve({ type: 'error', label: 'Error', content: 'a url is required!' })
          return
        }
        if (!input.startsWith('http')) {
          resolve({ type: 'error', label: 'Error', content: 'Please add `http` prefix!' })
          return
        }
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open(input, '_blank')
        resolve({ type: 'success', label: 'Done', content: 'Page Opened!' })
      })
    }
  },
  blog: {
    description: 'Open my blog in a new tab.',
    run(print) {
      return new Promise((resolve) => {
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open('https://makiru.top/blog', '_blank')
        resolve({ type: 'success', label: 'Done', content: ':)' })
      })
    }
  },
  2048: {
    description: 'Open a 2048 Game in a new tab.',
    run(print) {
      return new Promise((resolve) => {
        print({ type: 'success', label: 'Success', content: 'Opening' })

        window.open('https://tomotoes.com/2048', '_blank')
        resolve({ type: 'success', label: 'Done', content: 'Game Start!' })
      })
    }
  }
}

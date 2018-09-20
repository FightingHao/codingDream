# Speech Synthesis——语音记事本

前言：看了春哥的的博客，尝试着自己做了一个，就当练练手吧。  
本文出自春哥博客：`https://blog.csdn.net/liyuechun520/article/details/77166006`  


这是一个语音的记事本， 输入一段内容，选择不同的语言可以进行朗读。还可以选择不同的语速和语调。

HTML5中和Web Speech相关的API实际上有两类，一类是“语音识别(Speech Recognition)”，另外一个就是“语音合成(Speech Synthesis)”， 这两个名词实际上指的分别是“语音转文字”，和“文字变语音”。这个小例子则是完成了后者。

## SpeechSynthesisUtterance
### 构造函数
- `SpeechSynthesisUtterance.SpeechSynthesisUtterance()`
### 属性
- SpeechSynthesisUtterance.lang  
获取或者是设置`utterance`的语言。

- SpeechSynthesisUtterance.pitch  
获取或者是设置`utterance`的音高。

- SpeechSynthesisUtterance.rate  
获取或者是设置`utterance`的播放速率。

- SpeechSynthesisUtterance.text  
获取或者是设置`utterance`需要播放的文本内容。

- SpeechSynthesisUtterance.voice  
获得或设定将被用来说话的声音。

- SpeechSynthesisUtterance.volume  
获取或者是设置`utterance`的播放音量。

## SpeechSynthesis
### 属性
- SpeechSynthesis.paused（只读）  
判断是否是处于暂停状态。

- SpeechSynthesis.pending (只读)  
判断是否处于等待状态。

- SpeechSynthesis.speaking (只读)  
判断是否处于在读中。

### 事件
- SpeechSynthesis.onvoiceschanged  
监听翻译的语言是否发生了变化。

### 方法
- SpeechSynthesis.cancel()  
取消。

- SpeechSynthesis.getVoices()  
获取所有当前设备支持的SpeechSynthesisVoice对象。

- SpeechSynthesis.pause()  
暂停。

- SpeechSynthesis.resume()  
恢复。

- SpeechSynthesis.speak()  
开始语音读取。
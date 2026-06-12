export default function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="heroBadge"><span>●</span> Now accepting new clients</div>
        <h1 className="heroTitle">Your Podcast.<br /><em>Edited.</em> Everywhere.</h1>
        <p className="heroSub">Professional podcast video editing built for creators — multi-cam cuts, clean audio, AI thumbnails, and content repurposed for every major platform.</p>
        <div className="heroActions">
          <a href="#contact" className="btnPrimary">Start Your Project →</a>
          <a href="#services" className="btnGhost">See what&apos;s included ↓</a>
        </div>
        <div className="whitelistBadge">
          <span>✅</span> Whitelisted Video Editor for Video Podcasts
        </div>
        <div className="heroStats">
          <div>
            <div className="statNum">8</div>
            <div className="statLabel">Short-form clips/month</div>
          </div>
          <div>
            <div className="statNum">4</div>
            <div className="statLabel">Episodes/month</div>
          </div>
          <div>
            <div className="statNum">4</div>
            <div className="statLabel">Platforms optimized</div>
          </div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="premiereWindow">
          <div className="winTitlebar">
            <div className="winTitlebarLeft">
              <div className="prLogo">Pr</div>
              <span className="winTitle">KwentoPod_EP01.prproj — Adobe Premiere Pro</span>
            </div>
            <div className="winControls">
              <div className="winBtn" style={{background:'#f39c12'}}></div>
              <div className="winBtn" style={{background:'#27ae60'}}></div>
              <div className="winBtn" style={{background:'#e74c3c'}}></div>
            </div>
          </div>
          <div className="prMenubar">
            {['File','Edit','Clip','Sequence','Markers','Graphics','Window'].map(m => (
              <span key={m} className="prMenuItem">{m}</span>
            ))}
          </div>
          <div className="prWorkspace">
            {/* Project Panel */}
            <div className="prPanel prProject">
              <div className="prPanelHeader"><span className="prPanelTab">Project</span></div>
              {[
                {color:'#4a90d9', name:'EP01_CAM1.mp4', selected:true},
                {color:'#4a90d9', name:'EP01_CAM2.mp4'},
                {color:'#e67e22', name:'EP01_AUDIO.wav'},
                {color:'#27ae60', name:'MUSIC_BED.mp3'},
                {color:'#9b59b6', name:'THUMBNAIL_v2.psd'},
                {color:'#e74c3c', name:'CLIP_01.mp4'},
                {color:'#e74c3c', name:'CLIP_02.mp4'},
                {color:'#e74c3c', name:'CLIP_03.mp4'},
                {color:'#e74c3c', name:'CLIP_04.mp4'},
              ].map(f => (
                <div key={f.name} className={`prProjectItem${f.selected ? ' selected' : ''}`}>
                  <div className="prFileIcon" style={{background:f.color}}></div>
                  {f.name}
                </div>
              ))}
            </div>

            {/* Monitor */}
            <div className="prPanel prMonitor">
              <div className="prPanelHeader"><span className="prPanelTab">Program: Sequence 01</span></div>
              <div className="prMonitorScreen">
                <div className="prVideoPlaceholder">
                  <div style={{position:'absolute',top:8,left:8,fontSize:8,color:'#555',fontFamily:'monospace'}}>CAM 1 — WIDE</div>
                  <div className="prTimecode">00:03:42:12</div>
                  <div className="prLowerThird">
                    <div className="prLtName">JOHN SANTOS</div>
                    <div className="prLtTitle">Podcast Host · KwentoPod</div>
                  </div>
                </div>
              </div>
              <div className="prMonitorControls">
                <span className="prCtrlBtn">⏮</span>
                <span className="prCtrlBtn">⏪</span>
                <span className="prCtrlBtnPlay">▶</span>
                <span className="prCtrlBtn">⏩</span>
                <span className="prCtrlBtn">⏭</span>
                <span className="prTimecodeBar">00:03:42:12 / 01:12:08:00</span>
              </div>
            </div>

            {/* Effects */}
            <div className="prPanel prEffects">
              <div className="prPanelHeader"><span className="prPanelTab">Effect Controls</span></div>
              <div style={{padding:'4px 0'}}>
                <div style={{padding:'3px 8px',fontSize:9,color:'#4a90d9',fontWeight:600}}>EP01_CAM1.mp4</div>
                {[
                  {dot:'#4a90d9',label:'Motion',val:'▾'},
                  {dot:null,label:'Scale',val:'100',indent:true},
                  {dot:null,label:'Position',val:'960,540',indent:true},
                  {dot:'#27ae60',label:'Lumetri',val:'▾'},
                  {dot:null,label:'Exposure',val:'+0.3',indent:true},
                  {dot:null,label:'Contrast',val:'+12',indent:true},
                  {dot:null,label:'Saturation',val:'108',indent:true},
                ].map((e,i) => (
                  <div key={i} className="prEffectItem" style={e.indent ? {paddingLeft:16,color:'var(--pr-muted)'} : {}}>
                    {e.dot && <div className="prEffectDot" style={{background:e.dot}}></div>}
                    {!e.dot && e.indent && <div style={{width:6}}></div>}
                    {e.label}<span className="prEffectVal">{e.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="prPanel prTimeline">
              <div className="prTimelineHeader">
                <div className="prPanelTab">Timeline: Sequence 01</div>
                <div className="prTimelineTools">
                  {['V','C','R','T'].map(t => (
                    <span key={t} className={`prTool${t==='V'?' prToolActive':''}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="prTimelineBody">
                <div className="prTimeRuler">
                  {[{l:'00:00',p:'8%'},{l:'00:15',p:'25%'},{l:'00:30',p:'50%'},{l:'00:45',p:'75%'}].map(r => (
                    <span key={r.l}>
                      <span className="prRulerLabel" style={{left:r.p}}>{r.l}</span>
                      <span className="prRulerMark" style={{left:r.p}}></span>
                    </span>
                  ))}
                  <div className="prPlayhead" style={{left:'32%'}}></div>
                </div>
                <div className="prTracks">
                  <div className="prTrackRow">
                    <div className="prTrackLabel"><div className="prTrackEye"></div>V3</div>
                    <div className="prTrackContent">
                      <div className="prClip" style={{left:'5%',width:'18%',background:'#5b3a8a',color:'#d4b8ff'}}>LOWER THIRD</div>
                      <div className="prClip" style={{left:'55%',width:'20%',background:'#5b3a8a',color:'#d4b8ff'}}>LOWER THIRD</div>
                    </div>
                  </div>
                  <div className="prTrackRow">
                    <div className="prTrackLabel"><div className="prTrackEye"></div>V2</div>
                    <div className="prTrackContent">
                      <div className="prClip" style={{left:'28%',width:'22%',background:'#2c5f8a',color:'#a8d4f5'}}>CAM 2</div>
                      <div className="prClip" style={{left:'68%',width:'18%',background:'#2c5f8a',color:'#a8d4f5'}}>CAM 2</div>
                    </div>
                  </div>
                  <div className="prTrackRow">
                    <div className="prTrackLabel"><div className="prTrackEye"></div>V1</div>
                    <div className="prTrackContent">
                      <div className="prClip" style={{left:'2%',width:'26%',background:'#1a4a6e',color:'#a8d4f5'}}>CAM 1</div>
                      <div className="prClip" style={{left:'50%',width:'18%',background:'#1a4a6e',color:'#a8d4f5'}}>CAM 1</div>
                      <div className="prClip" style={{left:'86%',width:'12%',background:'#1a4a6e',color:'#a8d4f5'}}>CAM 1</div>
                    </div>
                  </div>
                  <div className="prTrackRow">
                    <div className="prTrackLabel"><div className="prTrackEye"></div>A1</div>
                    <div className="prTrackContent">
                      <div className="prClip" style={{left:'2%',width:'96%',background:'#1a5c3a',color:'#7fcca0'}}>AUDIO CLEAN</div>
                    </div>
                  </div>
                  <div className="prTrackRow">
                    <div className="prTrackLabel"><div className="prTrackEye"></div>A2</div>
                    <div className="prTrackContent">
                      <div className="prClip" style={{left:'2%',width:'96%',background:'#3a3a1a',color:'#b8b87f'}}>MUSIC BED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

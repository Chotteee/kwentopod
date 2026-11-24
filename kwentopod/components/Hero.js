export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <div className="whitelist-badge">✅ Whitelisted Video Editor for Video Podcasts</div>
        <h1>Your Podcast.<br /><span>Edited.</span> Everywhere.</h1>
        <p className="heroSub">Professional podcast video editing built for creators — multi-cam cuts, short-form reels, 4 platforms, and content repurposed for every major platform.</p>
        <div className="heroCtas">
          <a href="#contact" className="btnPrimary">Start Your Project →</a>
          <a href="#portfolio" className="btnSecondary">See What&apos;s Included</a>
        </div>
        <div className="heroStats">
          <div className="heroStat"><span>8</span><p>Short-form clips/month</p></div>
          <div className="heroStat"><span>4</span><p>Episodes/month</p></div>
          <div className="heroStat"><span>4</span><p>Platforms optimized</p></div>
        </div>
      </div>

      <div className="premiereMock">
        <div className="prTitleBar">
          <div className="prTitleLeft">
            <span className="prAppName">Adobe Premiere Pro</span>
            <span className="prMenus">File &nbsp; Edit &nbsp; Clip &nbsp; Sequence &nbsp; Markers &nbsp; Graphics &nbsp; View &nbsp; Window &nbsp; Help</span>
          </div>
          <div className="prWinControls">
            <span>─</span><span>□</span><span>✕</span>
          </div>
        </div>

        <div className="prBody">
          <div className="prLeft">
            <div className="prPanelHeader">Project: KwentoPod_EP04</div>
            <div className="prProjectItem">🎬 EP04_Main_A.mp4</div>
            <div className="prProjectItem">🎬 EP04_Main_B.mp4</div>
            <div className="prProjectItem">🎬 EP04_Cam2.mp4</div>
            <div className="prProjectItem active">🎵 EP04_Audio_Mix.wav</div>
            <div className="prProjectItem">🖼 Thumbnail_v3.psd</div>
            <div className="prProjectItem">📁 Graphics</div>
            <div className="prProjectItem">📁 Music</div>
          </div>

          <div className="prCenter">
            <div className="prPanelHeader">Program Monitor</div>
            <div className="prMonitor">
              <div className="prMonitorScreen">
                <div className="prMonitorContent">
                  <div className="prPodcastFrame">
                    <div className="prHost prHostLeft"></div>
                    <div className="prHost prHostRight"></div>
                  </div>
                  <div className="prLowerThird">
                    <div className="prLTName">John Santos · Host</div>
                    <div className="prLTShow">KwentoPod Episode 04</div>
                  </div>
                </div>
              </div>
              <div className="prTimecode">00:12:34:08</div>
            </div>
          </div>

          <div className="prRight">
            <div className="prPanelHeader">Effect Controls</div>
            <div className="prEffectItem">
              <span className="prEffectLabel">Motion</span>
              <span className="prEffectVal">▼</span>
            </div>
            <div className="prEffectRow">
              <span>Position</span><span>960 540</span>
            </div>
            <div className="prEffectRow">
              <span>Scale</span><span>100.0</span>
            </div>
            <div className="prEffectItem">
              <span className="prEffectLabel">Opacity</span>
              <span className="prEffectVal">100%</span>
            </div>
            <div className="prEffectItem">
              <span className="prEffectLabel">Lumetri Color</span>
              <span className="prEffectVal">▼</span>
            </div>
            <div className="prEffectRow">
              <span>Exposure</span><span>+0.3</span>
            </div>
            <div className="prEffectRow">
              <span>Contrast</span><span>+12</span>
            </div>
            <div className="prEffectRow">
              <span>Highlights</span><span>-20</span>
            </div>
          </div>
        </div>

        <div className="prTimeline">
          <div className="prTimelineHeader">
            <span>Timeline: EP04_Sequence</span>
            <span className="prTimecodeTL">00:12:34:08</span>
          </div>
          <div className="prTracks">
            <div className="prTrack">
              <div className="prTrackLabel">V3</div>
              <div className="prTrackContent">
                <div className="prClip prClipGfx">Lower Third</div>
              </div>
            </div>
            <div className="prTrack">
              <div className="prTrackLabel">V2</div>
              <div className="prTrackContent">
                <div className="prClip prClipCam2">CAM B — Wide Shot</div>
              </div>
            </div>
            <div className="prTrack">
              <div className="prTrackLabel">V1</div>
              <div className="prTrackContent">
                <div className="prClip prClipCam1">CAM A — Main Host</div>
                <div className="prClip prClipCam1b">CAM A — Cut</div>
              </div>
            </div>
            <div className="prTrack prTrackAudio">
              <div className="prTrackLabel">A1</div>
              <div className="prTrackContent">
                <div className="prClip prClipAudio">Audio Mix — EP04</div>
              </div>
            </div>
            <div className="prTrack prTrackAudio">
              <div className="prTrackLabel">A2</div>
              <div className="prTrackContent">
                <div className="prClip prClipMusic">Background Music</div>
              </div>
            </div>
          </div>
          <div className="prPlayhead"></div>
        </div>
      </div>
    </section>
  )
}

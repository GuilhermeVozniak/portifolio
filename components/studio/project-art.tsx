import Image from "next/image";
import "./project-art.css";

export function ProjectArtwork({ id }: { id: string }) {
  return (
    <div
      className={`art-demo project-artwork artwork-${id}`}
      aria-hidden="true"
    >
      {id === "option-tab" && (
        <>
          <div className="mini-window back">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="mini-window front">
            <span className="mini-code">⌥ tab</span>
            <div className="mini-apps">
              <span />
              <span />
              <span />
            </div>
          </div>
          <span className="art-word">Find your flow.</span>
        </>
      )}
      {id === "tiles-spliter" && (
        <>
          <div className="tile-demo">
            <span />
            <span />
            <span />
          </div>
          <span className="art-word">A place for everything.</span>
        </>
      )}
      {id === "app-cleaner" && (
        <>
          <div className="cleaner-orbit">
            <span>✳</span>
          </div>
          <span className="art-word">Room for what matters.</span>
        </>
      )}
      {id === "burner-wallet" && (
        <>
          <div className="art-phone">
            <div className="art-phone-speaker" />
            <div className="art-phone-screen">
              <span className="art-phone-signal">
                <i />
                <i />
                <i />
              </span>
              <span className="art-phone-bitcoin">₿</span>
              <span className="art-phone-offline">Offline</span>
            </div>
            <div className="art-phone-navigation">
              <i />
              <span />
              <i />
            </div>
            <div className="art-phone-keypad">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
                (key) => (
                  <span key={key}>{key}</span>
                ),
              )}
            </div>
          </div>
          <span className="art-word">Old phone. New purpose.</span>
        </>
      )}
      {id === "calendium" && (
        <>
          <div className="art-calendar">
            <div className="art-calendar-heading">
              <span>This week</span>
              <i />
              <i />
            </div>
            <div className="art-calendar-days">
              {["M", "T", "W", "T", "F"].map((day, index) => (
                <span key={index}>{day}</span>
              ))}
            </div>
            <div className="art-calendar-grid">
              {Array.from({ length: 15 }, (_, index) => (
                <span key={index} />
              ))}
              <i className="art-calendar-event event-one" />
              <i className="art-calendar-event event-two" />
              <i className="art-calendar-event event-three" />
            </div>
            <div className="art-mail">
              <span className="art-mail-envelope" />
              <span>
                <i />
                <i />
              </span>
            </div>
          </div>
          <span className="art-word">Email meets your day.</span>
        </>
      )}
      {id === "9router" && (
        <>
          <div className="art-router">
            <div className="art-provider provider-one">
              <i />
              <span />
              <span />
            </div>
            <div className="art-provider provider-two">
              <i />
              <span />
              <span />
            </div>
            <div className="art-provider provider-three">
              <i />
              <span />
              <span />
            </div>
            <div className="art-route route-one" />
            <div className="art-route route-two" />
            <div className="art-route route-three" />
            <div className="art-route-output" />
            <div className="art-endpoint">
              <span>9</span>
              <i />
            </div>
          </div>
          <span className="art-word">Many paths. One endpoint.</span>
        </>
      )}
      {id === "drag-zone" && (
        <>
          <div className="art-file-shelf">
            <div className="art-shelf-file file-back">
              <span />
              <span />
              <span />
            </div>
            <div className="art-shelf-file file-front">
              <i />
            </div>
            <div className="art-shelf-file file-side">
              <span />
              <span />
              <span />
            </div>
            <div className="art-shelf-tray">
              <span />
            </div>
          </div>
          <span className="art-word">A little space between tasks.</span>
        </>
      )}
      {id === "rockpi-penta-golang" && (
        <>
          <div className="art-server">
            <div className="art-server-top" />
            <div className="art-server-display">
              <span>24°</span>
              <i />
            </div>
            <div className="art-server-drives">
              {Array.from({ length: 4 }, (_, index) => (
                <span key={index}>
                  <i />
                  <i />
                </span>
              ))}
            </div>
            <div className="art-server-fan">
              <span />
              <span />
              <span />
              <i />
            </div>
            <div className="art-server-feet">
              <i />
              <i />
            </div>
          </div>
          <span className="art-word">A pulse behind the software.</span>
        </>
      )}
      {id === "blue-macaw" && (
        <>
          <div className="art-dictation">
            <div className="art-transcription">
              <span>
                <Image
                  src="/projects/blue-macaw.svg"
                  alt=""
                  width={19}
                  height={19}
                />
                Blue Macaw
              </span>
              <p>
                A thought becomes
                <br />a line of text.
                <i />
              </p>
              <div className="art-transcription-lines">
                <span />
                <span />
              </div>
            </div>
            <div className="art-dictation-wave">
              <span className="art-dictation-mic">
                <i />
              </span>
              <div>
                {Array.from({ length: 15 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
              <span className="art-dictation-stop" />
            </div>
          </div>
          <span className="art-word">From voice to words.</span>
        </>
      )}
    </div>
  );
}

import { Card, Button, Stack } from "react-bootstrap";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import Close from "./Close";

function HowToPlay({ setHelpVisible }) {
    return (
        <>

            <Card style={{ width: '30rem', position: 'relative' }} className="m-2 border-0 mt-5">
                <Button
                    onClick={() => setHelpVisible(false)}
                    style={{ position: 'absolute', top: '-1.5rem', right: '0.5rem' }}
                    variant="light"
                >
                    <i className="bi bi-x-circle"></i>
                </Button>
                <h1>How to Play</h1>
                <h2>Guess the secret movie in 10 tries</h2>
                <p>Each guess reveals the attributes for the movie you guessed.</p>
                <p>The colors will show whether the attribute of the guess is the same or close to that of the secret movie.</p>
                <div className="mt-4">
                    <h4>Release Year</h4>
                    <Stack direction="horizontal" gap={0}>
                        <div className="p-2"><Correct /></div>
                        <div className="p-2"><Close text={"within 10 years"} /></div>
                        <div className="p-2"><Incorrect /></div>
                    </Stack>
                </div>
                <div className="mt-4">
                    <h4>Cast</h4>
                    <div>Top 3 billed actors</div>
                    <Stack direction="horizontal" gap={0}>
                        <div className="p-2"><Correct /></div>
                        <div className="p-2"><Close text={"some are correct"} /></div>
                        <div className="p-2"><Incorrect /></div>
                    </Stack>
                </div>
                <div className="mt-4">
                    <h4>Genres</h4>
                    <Stack direction="horizontal" gap={0}>
                        <div className="p-2"><Correct /></div>
                        <div className="p-2"><Close text={"some are correct"} /></div>
                        <div className="p-2"><Incorrect /></div>
                    </Stack>
                </div>
                <div className="mt-4">
                    <h4>Runtime</h4>
                    <Stack direction="horizontal" gap={0}>
                        <div className="p-2"><Correct /></div>
                        <div className="p-2"><Close text={"within 20 minutes"} /></div>
                        <div className="p-2"><Incorrect /></div>
                    </Stack>
                </div>
                <div className="mt-4">
                    <h4>Fan Rating</h4>
                    <div>Avg. fan vote from TMDB (Score out of 10)</div>
                    <Stack direction="horizontal" gap={0}>
                        <div className="p-2"><Correct /></div>
                        <div className="p-2"><Close text={"within 1.0 point"} /></div>
                        <div className="p-2"><Incorrect /></div>
                    </Stack>
                </div>

            </Card>
        </>
    );
}

export default HowToPlay;
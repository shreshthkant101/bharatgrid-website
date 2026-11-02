---
status: DRAFT. Needs editorial approval before publishing. Not linked from the site and not in the build.
proposed URL: /notes/telling-a-crash-from-a-dropped-phone
proposed title: Telling a crash from a dropped phone | BharatGrid Systems
proposed description: Notes from building crash detection on ordinary phones for Indian roads: why one strong jolt is never enough, and how we test against the everyday moments that look like a collision.
target queries: phone crash detection false positives; detecting road accidents with smartphone sensors; crash detection potholes speed breakers
---

# Telling a crash from a dropped phone

*Engineering notes from Resku, BharatGrid Systems' personal safety app.*

A phone knows a surprising amount about the moment it is in. Its accelerometer feels every bump, its gyroscope feels
every turn, and its GPS knows how fast it is moving. In principle, that is enough to recognise a road collision and
tell someone's family within moments. In practice, the hard part is not detecting a crash. It is **not** detecting
everything else.

## One strong jolt is never enough

The obvious first design is a threshold: if the phone feels a large enough force, call it a crash. It fails at once
on Indian roads. A pothole taken at speed, a speed breaker nobody saw, a phone flung onto the passenger seat: each
produces a sharp spike. A detector that rings for every spike is a detector people switch off, and a safety feature
that is switched off protects nobody.

So Resku never decides on a single reading. It combines several independent signals into one judgement:

- **the shape of the impact**, not just its size: how the force rises and falls;
- **rotation**: what the gyroscope says the phone did through the event;
- **the change in speed**: what GPS says happened to the vehicle's motion;
- **what happens afterwards**: whether the phone and the vehicle come to rest.

No single signal decides. A pothole has the force of a collision but not its aftermath. A phone dropped in a parked
car has a sharp impact but no change in the vehicle's speed.

## Wait for the vehicle to stop

The most important rule we adopted is also the simplest. **Nothing alerts anyone until the vehicle has come to rest.**
After a possible impact, the app quietly checks that the vehicle has stopped moving and stayed stopped. Only then
does it start a countdown, which the person can cancel with one tap. If the vehicle drives on, the event is dropped
silently.

This removes a whole class of false alarms, because almost every harmless jolt happens to a vehicle that keeps going.
It also forced a subtle piece of engineering. A phone in the background does not always get regular location fixes,
and "no recent fix" must never be read as "stopped". Separating genuine stillness from simple silence turned out to
matter as much as any detection rule.

## The look-alikes are the real test set

Most of our testing time goes into moments that are not crashes:

- potholes and speed breakers at different speeds;
- a phone dropped, or tossed onto a bed or sofa;
- someone sitting down hard, or flopping onto a bed;
- a phone resting on a table indoors, where location readings can jump around even though nothing is moving.

Several of these have caught us out at some point. A phone tossed onto a bed, for example, can briefly look airborne,
spinning and then lying still, which is close to the signature of a person thrown in a collision. The fix was not a
bigger threshold. It was a better question: was the phone *swung* before it flew, the way a hand throws something?

People on foot need their own detector. A pedestrian struck by a vehicle produces a very different pattern from a
collision felt inside a car, and walking, running and everyday handling all have to be ruled out first.

## How we test it

We write each detection rule first as a small reference model, and test it against a library of modelled scenarios:
real collision shapes, near misses and everyday look-alikes. The app's own code is then held to the same expected
results by conformance tests. Before any change reaches a phone, we replay the app's real code against modelled
sensor and GPS data for those scenarios. When a false alarm turns up in field testing, we trace it to a cause before
changing anything.

That discipline matters more than any individual rule. Detection logic is easy to tune into a corner: every fix for
one false alarm risks hiding a real crash somewhere else. A shared scenario library, kept honest by tests, is how we
avoid trading one failure for another.

## What comes next

Hand-tuned rules only go so far. With consent, Resku keeps an anonymous summary of each impact it judges: the physics
of the event and whether it turned out to be real, without the time, the device or the person. Those summaries are
what we intend to train future detection models on, so that the next version learns from real roads rather than from
our assumptions about them.

---

*BharatGrid Systems is an Indian software and AI/ML engineering company. More about our engineering:
[bharatgridsystems.com/engineering](https://bharatgridsystems.com/engineering).*

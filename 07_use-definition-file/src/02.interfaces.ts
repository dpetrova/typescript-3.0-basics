//interfaces can be merged:
interface Mergeable {
    m1: string;
}

interface Mergeable {
    m2: string;
}

const mergeInterface: Mergeable = { m1: "", m2: "" }


//However, type does not act as an interface and does not allow to merge.
